<?php

namespace thePLAN\ContentVertex\Http\Controllers;

use Illuminate\Support\Facades\Response;
use thePLAN\ContentVertex\Models\Link;
use thePLAN\ContentVertex\Models\Page;
use thePLAN\ContentVertex\Models\Site;
use thePLAN\ContentVertex\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class LinkController extends Controller
{

    public function index(Site $site, Menu $menu)
    {

        $links = Link::with('page')->where('site_id', $site->id)->where('menu_id', $menu->id)->orderby('order')->get();

        return $links->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \App\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function create(Site $site)
    {
        //
    }


    public function store(Request $request, Site $site, Menu $menu)
    {
        $inputs = $request->all();

        //$inputs = $this->checkboxCheck($inputs, ['external', 'in_site_map', 'in_navigation']);

        $inputs['order'] = $menu->links->where('parent_id', null)->count() + 1;
        $inputs['site_id'] = $site->id;
        $inputs['menu_id'] = $menu->id;

        if($inputs['parent_id'] != null)
        {
            $link = Link::findOrFail($inputs['parent_id']);
            $inputs['order'] = $link->children->count() + 1;
        }


        $link =  Link::create($inputs);

        return $link->load(['children', 'parent'])->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Site  $site
     * @param  \App\Link  $link
     * @return \Illuminate\Http\Response
     */
    public function show(Site $site, Link $link)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Site  $site
     * @param  \App\Link  $link
     * @return \Illuminate\Http\Response
     */
    public function edit(Site $site, Link $link)
    {
        //
    }


    public function update(Request $request, Site $site, Menu $menu, Link $link)
    {
        $inputs = $request->all();

        $updateOrder = $inputs['order'];

        $linkAtCurrentOrder = null;

        if($updateOrder != $link->order)
        {
            //order changed, so swap with other item that has

            //TODO: Refactor this to just have one query
            if($link->parent != null)
            {
                $linkAtCurrentOrder = Link::where('parent_id', $link->parent->id)
                    ->where('site_id', $site->id)
                    ->where('menu_id', $menu->id)
                    ->where('order', $updateOrder)->first();
            }
            else
            {
                $linkAtCurrentOrder = Link::where('parent_id', null)
                    ->where('site_id', $site->id)
                    ->where('menu_id', $menu->id)
                    ->where('order', $updateOrder)->first();
            }

            $linkAtCurrentOrder->order = $link->order;
            $linkAtCurrentOrder->save();
        }

        $link->update($inputs);

        $link = $link->load(['children', 'parent']);
        if($linkAtCurrentOrder) {
            return Response::json([$link, $linkAtCurrentOrder->load(['children', 'parent'])]);
        }

        return Response::json([$link]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Site  $site
     * @param  \App\Link  $link
     *
     */
    public function destroy(Site $site, Menu $menu, Link $link)
    {

        foreach ($link->children as $child)
        {
            $child->delete();
        }

        $link->delete();

        return ['success' => true];
    }

    private function checkboxCheck($inputs, $values)
    {

        if(!is_array($values))
        {
            $values = [$values];
        }

        foreach ($values as $value) {

            if (isset($inputs[$value])) {
                $inputs[$value] = true;
            } else {
                $inputs[$value] = false;
            }
        }

        return $inputs;
    }
}
