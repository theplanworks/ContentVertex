@extends('contentvertex::layout')

@section('header')
    <div class="page-header">
        <h1><i class="glyphicon glyphicon-plus"></i> Site Menu / Create </h1>
    </div>
@endsection

@section('content')

    @include('error')

    <div class="row">
        <div class="col-md-12">
            @include('contentvertex::links.link', ['link' => null])
        </div>
    </div>

    <hr/>


        <div class="row">
            <div class="col-md-offset-2 col-md-6">
                @each('contentvertex::links.link', $links->where('parent', null), 'link')
            </div>
        </div>

@endsection