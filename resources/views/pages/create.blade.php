@extends('contentvertex::layout')

@section('header')
    <div class="page-header">
        <h1><i class="glyphicon glyphicon-plus"></i> Page / Create </h1>
    </div>
@endsection

@section('content')
    @include('error')

    <div class="row">
        <div class="col-md-12">

            <form action="{{ route('contentvertex.pages.store') }}" method="POST">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                <div class="form-group">
                    <label for="title-field">Title</label>
                    <input class="form-control" type="text" name="title" id="title-field" value="" required />
                </div>

                <div class="form-group">
                    <label for="description-field">Description</label>
                    <input class="form-control" type="text" name="description" id="description-field" value="" required />
                </div>

                <div class="form-group">
	                <label for="content-field">Content</label>
	                <textarea name="content" id="content-field" class="form-control" rows="3" minlength="1"></textarea>
                </div>

                <div class="well well-sm">
                    <button type="submit" class="btn btn-primary">Create</button>
                    <a class="btn btn-link pull-right" href="{{ route('contentvertex.pages.index') }}"><i class="glyphicon glyphicon-backward"></i> Back</a>
                </div>

            </form>
        </div>
    </div>
@endsection