<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">

    <title>Content Vertex Admin</title>
    
    <!-- META TAGs -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ mix('css/app.css', 'vendor/content-vertex') }}">

</head>

<body>
    <div id="root">
        @yield('content')
    </div>
    <script src="{{content_asset('js/ckeditor/ckeditor.js')}}"></script>
    <script src="{{ mix('js/app.js', 'vendor/content-vertex') }}"></script>
</body>
</html>
