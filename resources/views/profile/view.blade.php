@extends('layouts.app')
@section('title',' - '.$user->name)
@section('content')
<div class="container">
<div class="row">
  <div class="col-md-3 ">
    @include('profile.avatar')

    @if(Auth::user()->id == $user->id)
      <a href="{{route('profile-edit',['username'=>$user->username])}}" class="btn btn-primary btn-block">Edit profile</a>
    @else
      @if($isfriend)
        @if(!$isapproved)
          <button class="btn btn-default btn-block">waiting for approval</button>
        @endif
      @else
        {{Form::model($user,['route'=>['add-friend',$user->username],'method'=>'POST'])}}
          {{Form::hidden('users_id',Auth::user()->id)}}
          {{Form::hidden('friend_users_id',$user->id)}}
          {{Form::submit('Follow',['class'=>'btn btn-primary btn-block'])}}
        {{Form::close()}}
      @endif
    @endif


  </div>
  <div class="col-md-8 ">
    disini nanti list acara yang dibuat
  </div>
</div>
</div>
@endsection

