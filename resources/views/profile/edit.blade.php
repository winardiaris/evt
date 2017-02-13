@extends('layouts.app')
@section('content')
<div class="container">
<div class="row">
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-default">
      <div class="panel-heading">Profile</div>
      <div class="panel-body">
      {{ Form::model($user,['route'=>['profile-update',$user->id],'method'=>'POST'])}}
        @include('profile.form')
        {!! Form::submit('Save',['class'=>'btn btn-primary']) !!}
      {!! Form::close() !!}
      </div>
    </div>
  </div>
</div>
</div>
@endsection

