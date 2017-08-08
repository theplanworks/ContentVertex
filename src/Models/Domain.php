<?php

namespace thePLAN\ContentVertex\Models;

use Illuminate\Database\Eloquent\Model;

class Domain extends Model
{
    protected $guarded = [];

    protected $casts = [
        'is_prod' => 'boolean'
    ];

    public function site()
    {
        $this->belongsTo(Site::class);
    }
}
