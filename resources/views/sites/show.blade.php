@extends('contentvertex::layout')
@section('header')
    <div class="page-header">
        <h1>Site / Show #{{$site->id}}</h1>
    </div>
@endsection

@section('content')
    <div class="well well-sm">
        <div class="row">
            <div class="col-md-6">
                <a class="btn btn-link" href="{{ route('contentvertex.sites.index') }}"><i class="glyphicon glyphicon-backward"></i> Back</a>
            </div>
            <div class="col-md-6">
                 <a class="btn btn-sm btn-warning pull-right" href="{{ route('contentvertex.sites.edit', $site->id) }}">
                    <i class="glyphicon glyphicon-edit"></i> Edit
                </a>
            </div>
        </div>
    </div>

    <div class="row">

        <div class="col-md-12">

            <label>Name</label>
<p>
	{{ $site->name }}
</p> <label>Domain</label>
<p>
	{{ $site->domain }}
</p>

        </div>

    </div>
@endsection
