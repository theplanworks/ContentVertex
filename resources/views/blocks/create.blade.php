@extends('contentvertex::layout')

@section('header')
    <div class="page-header">
        <h1><i class="glyphicon glyphicon-plus"></i> Block / Create </h1>
    </div>
@endsection

@section('content')
    @include('error')

    <div class="row">
        <div class="col-md-12">

            <form action="{{ route('contentvertex.blocks.store') }}" method="POST">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                <div class="form-group">
	                <label for="title-field">Title</label>
	                <input class="form-control" type="text" name="title" id="title-field" value="" />
                </div>

                <div class="form-group">
	                <label for="content-field">Content</label>
                    <textarea name="content" id="content-field" class="form-control" rows="3"></textarea>
                </div>

                <div class="well well-sm">
                    <button type="submit" class="btn btn-primary">Create</button>
                    <a class="btn btn-link pull-right" href="{{ route('contentvertex.blocks.index') }}"><i class="glyphicon glyphicon-backward"></i> Back</a>
                </div>

            </form>

        </div>
    </div>
@endsection