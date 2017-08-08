<?php

namespace thePLAN\ContentVertex\Models;

use Illuminate\Database\Eloquent\Model;
use thePLAN\ContentVertex\Models\Domain;

class Site extends Model
{
    protected $guarded = [];


    public function menus()
    {
        return $this->hasMany(Menu::class);
    }

    public function domains()
    {
        return $this->hasMany(Domain::class);
    }
}
