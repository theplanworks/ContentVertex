<?php

namespace thePLAN\ContentVertex;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use thePLAN\ContentVertex\Commands\InstallCommand;
use thePLAN\ContentVertex\Facades\ContentVertex as ContentVertexFacade;

class ContentVertexServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {

        $loader = AliasLoader::getInstance();
        $loader->alias('ContentVertex', ContentVertexFacade::class);

        $this->app->singleton('contentvertex', function() {
            return new ContentVertex();
        });


        $this->registerConfigs();

        if($this->app->runningInConsole())
        {
            $this->registerPublishableContent();
            $this->registerConsoleCommands();
        }
    }

    private function registerPublishableContent()
    {
        $publishablePath = dirname(__DIR__) . '/publishable-assets';

        $assets = [
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


    private function registerConsoleCommands()
    {
        $this->commands(InstallCommand::class);
    }
}
