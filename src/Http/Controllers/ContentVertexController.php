<?php

namespace thePLAN\ContentVertex\Http\Controllers;


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use thePLAN\ContentVertex\Models\Block;
use thePLAN\ContentVertex\Models\Page;
use thePLAN\ContentVertex\Models\Site;

class ContentVertexController extends Controller
{
    public function index()
    {
        return view('contentvertex::app');
    }

    public function stats()
    {

        $pagesCount = Page::count();
        $sitesCount = Site::count();
        $blockCount = Block::count();

        return ['pages' => $pagesCount, 'sites' => $sitesCount, 'blocks' => $blockCount];
    }

    public function logout()
    {
        Auth::logout();
    }

    public function ckBlocks()
    {
        $blocks = Block::select('title', 'id')->get();

        $ckeditorSelect = [];

        foreach ($blocks as $block) {
            array_push($ckeditorSelect, [$block->title, $block->id]);
        }

        return $ckeditorSelect;
    }
}