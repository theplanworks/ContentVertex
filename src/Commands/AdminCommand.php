<?php

namespace thePLAN\ContentVertex\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\Console\Input\InputOption;


class AdminCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'vertex:admin';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create user';
    /**
     * Get user options.
     */
    protected function getOptions()
    {
        return [
            ['create', null, InputOption::VALUE_NONE, 'Create an admin user', null],
        ];
    }


    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        // Get or create user
        $user = $this->getUser(
            $this->option('create')
        );
        $user->save();
        $this->info('The user now has full access to your site.');
    }
    /**
     * Get command arguments.
     *
     * @return array
     */
    protected function getArguments()
    {
        return [
            ['email', InputOption::VALUE_REQUIRED, 'The email of the user.', null],
        ];
    }
    /**
     * Get or create user.
     *
     * @param bool $create
     *
     * @return \App\User
     */
    protected function getUser($create = false)
    {
        $email = $this->argument('email');
        $model = config('contentvertex.user.namespace', 'App\\User');
        // If we need to create a new user go ahead and create it
        if ($create) {
            $name = $this->ask('Enter the admin name');
            $password = $this->secret('Enter admin password');
            // Ask for email if there wasnt set one
            if (!$email) {
                $email = $this->ask('Enter the admin email');
            }
            $this->info('Creating admin account');
            return $model::create([
                'name'             => $name,
                'email'            => $email,
                'password'         => Hash::make($password),
            ]);
        }
        return $model::where('email', $email)->firstOrFail();
    }
}