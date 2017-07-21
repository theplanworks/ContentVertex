<?php

namespace thePLAN\ContentVertex\Facades;


use Illuminate\Support\Facades\Facade;

class ContentVertex extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'contentvertex';
    }
}