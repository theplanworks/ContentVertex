<?php

namespace thePLAN\ContentVertex\Http\Controllers;

use Kris\LaravelFormBuilder\FormBuilderTrait;
use function MongoDB\BSON\toJSON;
use thePLAN\ContentVertex\Http\Forms\SiteForm;
use thePLAN\ContentVertex\Models\Domain;
use thePLAN\ContentVertex\Models\Site;
use Illuminate\Http\Request;
use Kris\LaravelFormBuilder\FormBuilder;

class SiteController extends Controller
{
    use FormBuilderTrait;

	/**
	 * Variable to model
	 *
	 * @var site
	 */
	protected $model;

	/**
	 * Create instance of controller with Model
	 *
	 * @return void
	 */
	public function __construct(Site $model)
	{
		$this->model = $model;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$sites = $this->model->paginate();

		return $sites->toJson();
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create(FormBuilder $formBuilder)
	{
	    $form = $formBuilder->create(SiteForm::class, [
	        'method' => 'POST',
            'url' => route('contentvertex.sites.store')
        ]);

		return view('contentvertex::sites.create', compact('form'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param Request $request
	 * @return Response
	 */
	public function store(Request $request)
	{
		//$inputs = $request->all();
		//$this->model->create($inputs);

        $form = $this->form(SiteForm::class);

        $values = $form->getFieldValues();

        $domains = $values['domains'];

        unset($values['domains']);

        $site = $this->model->create($values);

        $site->domains()->createMany($domains);

		return redirect()->route('contentvertex.sites.index')->with('message', 'Item created successfully.');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$site = $this->model->with(['menus', 'domains'])->findOrFail($id);
		
		return $site->toJson();
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id, FormBuilder $formBuilder)
	{
		$site = $this->model->with('menus')->findOrFail($id);

		$form = $formBuilder->create(SiteForm::class, [
		    'method' => 'POST',
		    'url' => route('contentvertex.sites.update', $id),
		    'model' => $site
        ]);

		$form->add('_method', 'hidden', [
		    'value' => 'PUT'
        ]);
		
		return view('contentvertex::sites.edit', compact('site', 'form'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @param Request $request
	 *
	 */
	public function update(Request $request, $id)
	{
		$values = $request->all();

		$site = $this->model->findOrFail($id);

        $domains = $values['domains'];

        unset($values['menus']);
        unset($values['domains']);

        $domainsToCreate = [];

		foreach ($domains as $domain)
        {
            if($domain['id'] == null) {
                array_push($domainsToCreate, $domain);
            } else {
                $item = Domain::findOrFail($domain['id']);
                $item->update($domain);
            }
        }

        $site->update($values);

		$site->domains()->createMany($domainsToCreate);

		$site = $this->model->with(['domains', 'menus'])->findOrFail($id);

		return $site->toJson();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$this->model->destroy($id);

		return redirect()->route('contentvertex.sites.index')->with('message', 'Item deleted successfully.');
	}
}