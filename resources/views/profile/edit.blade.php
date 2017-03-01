@extends('layouts.app')
@section('content')
<div class="container">
<div class="row">
  <div class="col-md-2 col-md-offset-1">
    @include('profile.avatar')
  </div>
  <div class="col-md-8">
    <div class="panel panel-default">
      <div class="panel-body">
      {{ Form::model($user,['route'=>['profile-update',$user->username],'method'=>'POST'])}}
        @include('profile.form')
        {!! Form::submit('Save',['class'=>'btn btn-primary']) !!}
      {!! Form::close() !!}
      </div>
    </div>
  </div>
</div>
</div>
@endsection

