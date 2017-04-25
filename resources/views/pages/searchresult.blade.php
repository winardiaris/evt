@extends('layouts.app')
@section('title',' - Search '.$search)
@section('content')
<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2 ">
      <div class="well well-default">
      <h1>Search Result</h1>
      <b>{{$search}}</b>
      </div>
    </div>
  </div>
</div>
@endsection
