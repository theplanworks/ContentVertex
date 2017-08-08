<?php

if (!function_exists('content_asset')) {
    function content_asset($path, $secure = null)
    {
        return asset(config('contentvertex.assets_path').'/'.$path, $secure);
    }
}