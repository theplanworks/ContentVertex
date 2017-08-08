<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
        <h4 class="panel-title">
            <a role="button" data-toggle="collapse" @if($link) href="#menu-{{ $link->id }}" @else href="#create-new" @endif aria-expanded="false" aria-controls="collapseOne">
                @if($link) {{$link->title}} @else create new link @endif
            </a>
        </h4>
    </div>
    <div @if($link) id="menu-{{ $link->id }}" @else id="create-new" @endif class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
        <div class="panel-body">
            @if($link)
                <form action="{{ route('contentvertex.sites.menu.links.update', ['site' => $site->id, 'link' => $link->id, 'menu' => $menu->id]) }}" method="POST">

                    @else
                        <form action="{{ route('contentvertex.sites.menu.links.store', [ 'site' => $site->id, 'menu' => $menu->id]) }}" method="POST">
                            @endif
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">

                            <input type="hidden" name="site_id" value="{{$site->id}}">
                            <input type="hidden" name="menu_id" value="{{$menu->id}}">

                            @if($link)
                                <input type="hidden" name="_method" value="PUT">

                            @else
                                <input type="hidden" name="order" value="{{$links->count() + 1}}">
                            @endif

                            <div class="form-group">
                                <label for="title-field">Title</label>
                                <input class="form-control" type="text" name="title" id="title-field" @if($link) value="{{old('title', $link->title)}}" @endif>
                            </div>

                            <label>
                                <input type="checkbox" name="external"  @if($link && $link->external == 1) checked @endif> External Nav Link
                            </label>

                            <div class="form-group">
                                <label for="url-field">Url</label>
                                <input class="form-control" type="text" name="url" id="url-field" @if($link) value="{{old('url', $link->url)}}" @endif >
                            </div>

                            <div class="form-group">
                                <label for="page-field">Page</label>
                                <select class="form-control" name="page_id" >
                                    @foreach($pages as $page)
                                        <option value="{{$page->id}}" @if($link && $page->id == $link->page->id) selected @endif >{{$page->title}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="parent-field">Parent Link</label>
                                <select class="form-control" name="parent_id">
                                    <option value="">No Parent</option>
                                    @foreach($links as $linkItem)
                                        <option value="{{$linkItem->id}}" @if($link && $link->parent && $linkItem->id == $link->parent->id) selected @endif>{{$linkItem->title}}</option>
                                    @endforeach

                                </select>
                            </div>

                            @if($link)
                                <div class="form-group">
                                    <label for="order-field">Order</label>
                                    <select class="form-control" name="order" id="order-field">
                                        @if($link->parent)
                                            @foreach($link->parent->children as $child)
                                                <option value="{{$child->order}}" @if($child->order == $link->order) selected @endif>{{$child->order}}</option>
                                            @endforeach
                                        @else
                                            @foreach($links->where('parent', null) as $parent)
                                                <option value="{{$parent->order}}" @if($parent->order == $link->order) selected @endif>{{$parent->order}}</option>
                                            @endforeach
                                        @endif
                                    </select>
                                </div>
                            @endif

                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="in_navigation"  @if($link && $link->in_navigation == 1) checked @endif > Show in Navigation
                                </label>
                            </div>

                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="in_site_map"  @if($link && $link->in_site_map == 1) checked @endif> Show in site map
                                </label>
                            </div>

                            <button type="submit" class="btn btn-primary">@if($link) Update @else Create @endif</button>

                        </form>

                        @if($link)
                            <br/>
                            <form action="{{ route('contentvertex.sites.menu.links.destroy', ['site' => $site->id, 'link' => $link->id, 'menu' => $menu->id]) }}" method="POST" onsubmit="return confirm('Delete? Are you sure?');">
                                {{csrf_field()}}
                                <input type="hidden" name="_method" value="DELETE">

                                <button type="submit" class="btn btn-danger"><i class="glyphicon glyphicon-trash"></i> Delete</button>
                            </form>

                            <hr/>

                            <h3>Children</h3>
                            @each('contentvertex::links.link', $link->children->sortBy('order'), 'link')
                        @endif
        </div>
    </div>
</div>