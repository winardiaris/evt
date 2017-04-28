@extends('layouts.app')
@section('title',"")
@section('content')
<div class="container">
  <div class="row">
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
</div>
@endsection

