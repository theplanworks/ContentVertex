<?php

namespace thePLAN\ContentVertex\Http\Controllers;

use thePLAN\ContentVertex\Models\Domain;
use thePLAN\ContentVertex\Models\Site;
use Illuminate\Http\Request;

class SiteController extends Controller
{

	protected $model;

	public function __construct(Site $model)
	{
		$this->model = $model;
	}

	public function index()
	{
		$sites = $this->model->paginate();

		return $sites->toJson();
	}

	public function create()
	{

		return view('contentvertex::sites.create');
	}

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

	public function show($id)
	{
		$site = $this->model->with(['menus', 'domains'])->findOrFail($id);
		
		return $site->toJson();
	}

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

	public function destroy($id)
	{
		$this->model->destroy($id);

		return redirect()->route('contentvertex.sites.index')->with('message', 'Item deleted successfully.');
	}
}