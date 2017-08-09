<?php


//Route::group(['as' => 'contentvertex.'], function (){

    //$namespacePrefix = '\\'.config('contentvertex.controller.namespace').'\\';

    Route::get('login', ['uses' => 'LoginController@login', 'as' => 'login']);
    Route::post('login', ['uses' => 'LoginController@postLogin', 'as' => 'postLogin']);

    Route::group(['middleware' => ['contentVertex.auth']], function(){
        Route::get('/', ['uses' => 'ContentVertexController@index', 'as' => 'dashboard']);
        Route::get('api/stats', 'ContentVertexController@stats');
        Route::get('api/ck-blocks', 'ContentVertexController@ckBlocks');
        Route::resource('api/sites', 'SiteController');
        Route::resource('api/domains', 'DomainController');
        Route::resource('api/sites/{site}/menus/{menu}/links', 'LinkController');
        Route::resource('api/sites/{site}/menus', 'MenuController');
        Route::resource('api/pages', 'PageController');
        Route::resource('api/blocks', 'BlockController');


        Route::group(['prefix' => 'api/media'], function (){
            Route::post('files', 'MediaController@files');
            Route::get('directories', 'MediaController@getAllDirs');
            Route::post('new-folder', 'MediaController@newFolder');
            Route::post('upload', 'MediaController@upload');
        });

    });


    //Route::post('logout', ['uses' => $namespacePrefix.'ContentVertexController@logout', 'as' => 'logout']);

    //Route::resource('sites', $namespacePrefix.'SiteController');
    //Route::resource('sites.menu.links', $namespacePrefix.'LinkController');
    //Route::resource('sites.menus', $namespacePrefix.'MenuController');
    //Route::resource('pages', $namespacePrefix.'PageController');
    //Route::resource('blocks', $namespacePrefix.'BlockController');

//});