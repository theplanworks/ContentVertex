@extends('contentvertex::layout')
@section('header')
    <div class="page-header">
        <h1>Block / Show #{{$block->id}}</h1>
    </div>
@endsection

@section('content')
    <div class="well well-sm">
        <div class="row">
            <div class="col-md-6">
                <a class="btn btn-link" href="{{ route('contentvertex.blocks.index') }}"><i class="glyphicon glyphicon-backward"></i> Back</a>
            </div>
            <div class="col-md-6">
                 <a class="btn btn-sm btn-warning pull-right" href="{{ route('contentvertex.blocks.edit', $block->id) }}">
                    <i class="glyphicon glyphicon-edit"></i> Edit
                </a>
            </div>
        </div>
    </div>

    <div class="row">

        <div class="col-md-12">

            <label>Title</label>
            <p>{{ $block->title }}</p>
            <label>Content</label>
            <p>{{ $block->content }}</p>

        </div>

    </div>
@endsection
