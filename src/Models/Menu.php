<?php

namespace thePLAN\ContentVertex\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\View;
use Illuminate\Support\HtmlString;

class Menu extends Model
{

    protected $guarded = [];

    public function links()
    {
        return $this->hasMany(Link::class);
    }

    public function site()
    {
        $this->belongsTo(Site::class);
    }

    public static function display($menuSlug, $type = null)
    {
        $menu = static::where('slug', $menuSlug)->with('links.page')->first();

        if(!isset($menu)) {
            return false;
        }

        if (is_null($type) || !view()->exists($type)) {
            $type = 'front.partials.bootstrap_menu';
        }

        return new HtmlString(
            View::make($type, ['items' => $menu->links->where('parent', null)])->render()
        );

    }

}
