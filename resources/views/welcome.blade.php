@extends('layouts.app')
@section('title',"")
@section('content')
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="waterfall" data-col-min-width="300"
        data-default-container-width="400"
        data-autoresize="true">
        @foreach ($posts as $post)
          <div class="col-md-4 item">
            @include('post.post')
          </div>
        @endforeach
      </div>
    </div>
    @if(Auth::guest())
    <div class="col-md-12">
      <div class="col-md-4 col-md-offset-4">
        <a href="{{url('/login')}}"class="btn btn-default btn-block">Load More..</a>
      </div>
    </div>
    @endif
  </div>
</div>
@endsection

