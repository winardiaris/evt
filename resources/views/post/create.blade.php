@extends('layouts.app')
@section('title',' - Create Event')
@section('content')
<div class="container">
<div class="row">
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-default">
      <div class="panel-body">
      {{ Form::model($user,['route'=>['post-save',Auth::user()->username],'method'=>'POST'])}}
        @include('post.form')
        {!! Form::submit('Save',['class'=>'btn btn-primary']) !!}
      {!! Form::close() !!}
      </div>
    </div>
  </div>
</div>
</div>
@endsection
