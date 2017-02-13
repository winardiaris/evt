@extends('layouts.app')
@section('content')
<div class="container">
<div class="row">
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-default">
      <div class="panel-heading">Profile</div>
      <div class="panel-body">
          <div class="col-md-4">
              <label>Name</label>
          </div>
          <div class="col-md-8">
              <label>: {{$user->name}}</label>
          </div>
      </div>
      <div  class="panel-footer">
        @if(Auth::user()->id == $user->id)
          <a href="{{route('profile-edit',['username'=>$user->username])}}">Edit</a>
        @endif
      </div>
    </div>
  </div>
</div>
</div>
@endsection

