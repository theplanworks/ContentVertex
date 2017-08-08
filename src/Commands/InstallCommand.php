<?php

namespace thePLAN\ContentVertex\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Kris\LaravelFormBuilder\FormBuilderServiceProvider;
use thePLAN\ContentVertex\ContentVertexServiceProvider;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'vertex:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install vertex multi site CMS';

    /**
     * Get the composer command for the environment.
     *
     * @return string
     */
    protected function findComposer()
    {
        if (file_exists(getcwd().'/composer.phar')) {
            return '"'.PHP_BINARY.'" '.getcwd().'/composer.phar';
        }
        return 'composer';
    }


    public function fire(Filesystem $filesystem)
    {
        $this->info("Publishing Service Providers and datatbase");

        $this->call('vendor:publish', ['--provider' => ContentVertexServiceProvider::class]);

        $this->info('Migrating the database');

        $this->call('migrate');

        $this->info('Dumping the autoload');

        $composer = $this->findComposer();

        $process = new Process($composer.' dump-autoload');

        $process->setWorkingDirectory(base_path())->run();

        $this->info('Adding ContentVertex routes to routes/web.php');

        $routes_contents = $filesystem->get(base_path('routes/web.php'));

        if (false === strpos($routes_contents, 'ContentVertex::routes()')) {
            $filesystem->append(
                base_path('routes/web.php'),
                "\n\nRoute::group(['prefix' => 'content-vertex'], function () {\n    ContentVertex::routes();\n});\n"
            );
        }
        \Route::group(['prefix' => 'content-vertex'], function () {
            \ContentVertex::routes();
        });

        $this->call('storage:link');

    }

}
