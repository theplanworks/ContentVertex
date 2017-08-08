@extends('contentvertex::layout')

@section('header')
    <div class="page-header">
        <h1><i class="glyphicon glyphicon-edit"></i> Site / Edit #{{$site->id}}</h1>
    </div>
@endsection

@section('content')
    @include('error')

    <div class="row">
        <div class="col-md-12">
            {{--<form action="{{ route('contentvertex.sites.update', $site->id) }}" method="POST">
                <input type="hidden" name="_method" value="PUT">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                <div class="form-group">
                    <label for="name-field">Name</label>
                    <input class="form-control" type="text" name="name" id="name-field" value="{{ old('name', $site->name ) }}" />
                </div> <div class="form-group">
                    <label for="domain-field">Domain</label>
                    <input class="form-control" type="text" name="domain" id="domain-field" value="{{ old('domain', $site->domain ) }}" />
                </div>

                <div class="well well-sm">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <a class="btn btn-link pull-right" href="{{ route('contentvertex.sites.index') }}"><i class="glyphicon glyphicon-backward"></i>  Back</a>
                </div>
            </form>--}}

            {!! form_start($form) !!}
            {!! form_row($form->name) !!}
            {!! form_row($form->slug) !!}
            <div class="row">
                <div class="col-md-4">
                    <div class="collection-container" data-prototype="{{ form_row($form->domains->prototype()) }}">
                        {!! form_row($form->domains) !!}
                    </div>
                    <button type="button" class="add-to-collection btn btn-info">Add to domain</button>
                </div>
            </div>

            {!! form_end($form) !!}
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

        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <a class="btn btn-success" href="{{ route('contentvertex.sites.menus.create', $site->id) }}">Create Menu</a>
            @if($site->menus->count())
                <table class="table table-condensed table-striped">
                    <thead>
                    <tr>
                        <th class="text-center">#</th>
                        <th>Name</th> <th>Slug</th>
                        <th class="text-right">OPTIONS</th>
                    </tr>
                    </thead>

                    <tbody>
                    @foreach($site->menus as $menu)
                        <tr>
                            <td class="text-center"><strong>{{$menu->id}}</strong></td>

                            <td>{{$menu->name}}</td> <td>{{$menu->slug}}</td>

                            <td class="text-right">
                                <a class="btn btn-xs btn-primary" href="{{ route('contentvertex.sites.menu.links.index', [ 'site' => $site->id, 'menu' => $menu->id ]) }}">
                                    <i class="glyphicon glyphicon-eye-open"></i> View
                                </a>

                                <a class="btn btn-xs btn-warning" href="{{ route('contentvertex.sites.menus.edit', [ 'site' => $site->id, 'menu' => $menu->id ]) }}">
                                    <i class="glyphicon glyphicon-edit"></i> Edit
                                </a>


                                <form action="{{ route('contentvertex.sites.menus.destroy', [ 'site' => $site->id, 'menu' => $menu->id ]) }}" method="POST" style="display: inline;" onsubmit="return confirm('Delete? Are you sure?');">
                                    {{csrf_field()}}
                                    <input type="hidden" name="_method" value="DELETE">

                                    <button type="submit" class="btn btn-xs btn-danger"><i class="glyphicon glyphicon-trash"></i> Delete</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            @else
                <h3 class="text-center alert alert-info">Empty!</h3>
            @endif
            {{--<a href="{{ route('sites.links.index', $site->id) }}">Menu</a>--}}
        </div>
    </div>

@endsection