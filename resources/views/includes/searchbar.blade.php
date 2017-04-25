{!! Form::open(array('route' => 'search-post','class'=>'navbar-form navbar-left')) !!}
    <div class="form-group" style="width:100%;position:relative;">
        <div class="input-group" style="width:100%;">
            <input class="form-control" name="search" placeholder="Search ..." value="{{Request::session()->get('search')}}">
            <span class="input-group-btn">
                <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
            </span>
        </div>
    </div>
{!! Form::close() !!}
