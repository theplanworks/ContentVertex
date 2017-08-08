<?php

namespace thePLAN\ContentVertex\Models;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{

    protected $guarded = [];

    protected $casts = ['external' => 'boolean', 'in_navigation' => 'boolean', 'in_site_map' => 'boolean'];

    public function parent() {
        return $this->belongsTo(Link::class, 'parent_id');
    }

    public function children() {
        return $this->hasMany(Link::class, 'parent_id');
    }

    public function page() {
        return $this->belongsTo(Page::class);
    }
}
