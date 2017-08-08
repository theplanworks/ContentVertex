<?php

namespace thePLAN\ContentVertex\Http\Controllers;

use thePLAN\ContentVertex\Models\Menu;
use thePLAN\ContentVertex\Models\Site;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function index(Site $site)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \App\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function create(Site $site)
    {
        return view('contentvertex::menu.create', compact('site'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Site  $site
     */
    public function store(Request $request, Site $site)
    {
        $inputs = $request->all();
        $inputs['site_id'] = $site->id;
        $menu = Menu::create($inputs);

        return $menu->load('links')->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Site  $site
     * @param  \App\Menu  $menu
     */
    public function show(Site $site, Menu $menu)
    {
        return $menu->load(['links.children.parent.children', 'links.parent.children.parent'])->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Site  $site
     * @param  \App\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function edit(Site $site, Menu $menu)
    {
        return view('contentvertex::menu.edit', compact('site', 'menu'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Site  $site
     * @param  \App\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Site $site, Menu $menu)
    {
        $inputs = $request->all();

        $menu->update($inputs);

        return $menu->load(['links.children.parent', 'links.parent.children'])->toJson();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Site  $site
     * @param  \App\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy(Site $site, Menu $menu)
    {
        foreach ($menu->links as $link)
        {
            $link->delete();
        }

        $menu->delete();

        return redirect()->route('contentvertex.sites.edit', $site->id)->with('message', 'Menu deleted successfully.');

    }
}
