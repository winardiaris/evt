@extends('layouts.app')
@section('title',' - '. $post->user->name.'"'.$post->title .'')
@section('content')
<div class="container">
<div class="row">
  <div class="col-md-8 col-md-offet-2">
    @include('post.post');
  </div>
</div>
</div>
@endsection

