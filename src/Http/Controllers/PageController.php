<?php

namespace thePLAN\ContentVertex\Http\Controllers;

use thePLAN\ContentVertex\Models\Page;
use App\Services\BlockService;
use Illuminate\Http\Request;

class PageController extends Controller
{
	/**
	 * Variable to model
	 *
	 * @var page
	 */
	protected $model;
	protected $blockService;

	/**
	 * Create instance of controller with Model
	 *
	 * @return void
	 */
	public function __construct(Page $model, BlockService $blockService)
	{
		$this->model = $model;
		$this->blockService = $blockService;
	}

	/**
	 * Display a listing of the resource.
	 *
	 *
	 */
	public function index()
	{
		$pages = $this->model->all();

		return $pages->toJson();
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return view('contentvertex::pages.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param Request $request
	 * @return Response
	 */
	public function store(Request $request)
	{
		$inputs = $request->all();
		$page = $this->model->create($inputs);

		return $page->toJson();
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$page = $this->model->findOrFail($id);

        //$page->content = $this->blockService->getSharedBlockContent($page->content);
		
		return $page->toJson();
	}


	public function edit($id)
	{
		$page = $this->model->findOrFail($id);
		
		return $page->toJson();
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @param Request $request
	 * @return Response
	 */
	public function update(Request $request, $id)
	{
		$inputs = $request->all();

		$page = $this->model->findOrFail($id);		
		$page->update($inputs);

		return $page->toJson();
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

		return redirect()->route('contentvertex.pages.index')->with('message', 'Item deleted successfully.');
	}

}