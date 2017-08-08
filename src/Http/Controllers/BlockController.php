<?php

namespace thePLAN\ContentVertex\Http\Controllers;

use thePLAN\ContentVertex\Models\Block;
use Illuminate\Http\Request;

class BlockController extends Controller
{
	/**
	 * Variable to model
	 *
	 * @var block
	 */
	protected $model;

	/**
	 * Create instance of controller with Model
	 *
	 * @return void
	 */
	public function __construct(Block $model)
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
		$blocks = $this->model->all();

		return $blocks->toJson();
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return view('contentvertex::blocks.create');
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
		$block = $this->model->create($inputs);

		return $block->toJson();
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$block = $this->model->findOrFail($id);
		
		return $block->toJson();
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$block = $this->model->findOrFail($id);
		
		return view('contentvertex::blocks.edit', compact('block'));
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

		$block = $this->model->findOrFail($id);		
		$block->update($inputs);

		return $block->toJson();
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

		return redirect()->route('contentvertex.blocks.index')->with('message', 'Item deleted successfully.');
	}
}