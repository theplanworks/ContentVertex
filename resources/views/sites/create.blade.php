@extends('contentvertex::layout')

@section('header')
    <div class="page-header">
        <h1><i class="glyphicon glyphicon-plus"></i> Site / Create </h1>
    </div>
@endsection

@section('content')
    @include('error')

    {!! form_start($form) !!}
    <div class="collection-container" data-prototype="{{ form_row($form->domains->prototype()) }}">
        {!! form_row($form->domains) !!}
    </div>
    {!! form_end($form) !!}
    <button type="button" class="add-to-collection">Add to collection</button>
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script>
        $(document).ready(function() {
            $('.add-to-collection').on('click', function(e) {
                e.preventDefault();
                var container = $('.collection-container');
                var count = container.children().length;
                var proto = container.data('prototype').replace(/__NAME__/g, count);
                container.append(proto);
            });
        });
    </script>

    {{--<div class="row">
        <div class="col-md-12">

            <form action="{{ route('contentvertex.sites.store') }}" method="POST">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                <div class="form-group">
	                <label for="name-field">Name</label>
	                <input class="form-control" type="text" name="name" id="name-field" value="" required />
                </div>

                <div class="well well-sm">
                    <button type="submit" class="btn btn-primary">Create</button>
                    <a class="btn btn-link pull-right" href="{{ route('contentvertex.sites.index') }}"><i class="glyphicon glyphicon-backward"></i> Back</a>
                </div>
            </form>

        </div>
    </div>--}}
@endsection