<?php

namespace thePLAN\ContentVertex\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = ['title', 'description', 'url', 'content'];
}
