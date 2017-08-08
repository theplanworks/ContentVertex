@extends('contentvertex::layout')

@section('header')
    <div class="page-header">
        <h1><i class="glyphicon glyphicon-plus"></i> Menu / Create </h1>
    </div>
@endsection

@section('content')
    @include('error')

    <div class="row">
        <div class="col-md-12">

            <form action="{{ route('contentvertex.sites.menus.store', $site->id) }}" method="POST">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <input type="hidden" name="site_id" value="{{$site->id}}">

                <div class="form-group">
                    <label for="name-field">Name</label>
                    <input class="form-control" type="text" name="name" id="name-field" value="" />
                </div>

                <div class="form-group">
                    <label for="description-field">Slug</label>
                    <input class="form-control" type="text" name="slug" id="slug-field" value="" />
                </div>

                <div class="well well-sm">
                    <button type="submit" class="btn btn-primary">Create</button>
                    <a class="btn btn-link pull-right" href="{{ route('contentvertex.sites.edit', $site->id) }}"><i class="glyphicon glyphicon-backward"></i> Back</a>
                </div>

            </form>
        </div>
    </div>
@endsection