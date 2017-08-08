<?php

namespace thePLAN\ContentVertex;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Kris\LaravelFormBuilder\Facades\FormBuilder;
use Kris\LaravelFormBuilder\FormBuilderServiceProvider;
use thePLAN\ContentVertex\Commands\AdminCommand;
use thePLAN\ContentVertex\Commands\InstallCommand;
use thePLAN\ContentVertex\Facades\ContentVertex as ContentVertexFacade;
use thePLAN\ContentVertex\Http\Middleware\AuthMiddleware;

class ContentVertexServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(Router $router)
    {
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'contentvertex');
        $this->defineAssetPublishing();
        $this->registerRoutes();


        if (app()->version() >= 5.4) {
            $router->aliasMiddleware('contentVertex.auth', AuthMiddleware::class);
        } else {
            $router->middleware('contentVertex.auth', AuthMiddleware::class);
        }
    }

    public function defineAssetPublishing()
    {
        $this->publishes([
            CONTENTVERTEX_PATH.'/public' => public_path('vendor/content-vertex'),
        ], 'content-vertex-assets');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {

        if (! defined('CONTENTVERTEX_PATH')) {
            define('CONTENTVERTEX_PATH', realpath(__DIR__.'/../'));
        }

        $this->app->register(FormBuilderServiceProvider::class);

        $loader = AliasLoader::getInstance();
        $loader->alias('ContentVertex', ContentVertexFacade::class);
        $loader->alias('FormBuilder', FormBuilder::class);

        $this->app->singleton('contentvertex', function() {
            return new ContentVertex();
        });

        $this->loadHelpers();

        $this->registerConfigs();

        if($this->app->runningInConsole())
        {
            $this->registerPublishableContent();
            $this->registerConsoleCommands();
        }
    }

    protected function registerRoutes()
    {
        Route::group([
            'prefix' => 'content-vertex',
            'as' => 'contentvertex.',
            'namespace' => 'thePLAN\ContentVertex\Http\Controllers',
            'middleware' => ['web'],
        ], function () {
           $this->loadRoutesFrom(__DIR__.'/../routes/contentVertex.php');
        });
    }

    private function registerPublishableContent()
    {
        $publishablePath = dirname(__DIR__) . '/publishable-assets';

        $assets = [
            'assets' => [
                "{$publishablePath}/asserts/" => config_path('contentvertex.assets_path'),
            ],
            'config' => [
                "{$publishablePath}/config/contentvertex.php" => config_path('contentvertex.php'),
            ],
            'migrations' => [
                "{$publishablePath}/database/migrations" => database_path('migrations')
            ]
        ];

        foreach ($assets as $item => $paths) {
            $this->publishes($paths, $item);
        }
    }

    public function registerConfigs()
    {
        $this->mergeConfigFrom(
            dirname(__DIR__).'/publishable-assets/config/contentvertex.php', 'contentvertex'
        );
    }

    private function loadHelpers()
    {
        foreach (glob(__DIR__.'/Helpers/*.php') as $filename)
        {
            require_once $filename;
        }
    }


    private function registerConsoleCommands()
    {
        $this->commands(InstallCommand::class, AdminCommand::class);
    }
}
