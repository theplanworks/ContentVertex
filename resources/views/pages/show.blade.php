@extends('contentvertex::layout')
@section('header')
    <div class="page-header">
        <h1>Page / Show #{{$page->id}}</h1>
    </div>
@endsection

@section('content')
    <div class="well well-sm">
        <div class="row">
            <div class="col-md-6">
                <a class="btn btn-link" href="{{ route('contentvertex.pages.index') }}"><i class="glyphicon glyphicon-backward"></i> Back</a>
            </div>
            <div class="col-md-6">
                 <a class="btn btn-sm btn-warning pull-right" href="{{ route('contentvertex.pages.edit', $page->id) }}">
                    <i class="glyphicon glyphicon-edit"></i> Edit
                </a>
            </div>
        </div>
    </div>

    <div class="row">

        <div class="col-md-12">

            <label>Title</label>
<p>
	{{ $page->title }}
</p> <label>Description</label>
<p>
	{{ $page->description }}
</p>
            <label>Content</label>

	{!! $page->content !!}


        </div>

    </div>
@endsection
