<div class="user-avatar">
  <div class="panel panel-default">
    @if(Route::is('profile-edit'))
    <div class="panel-body isme">
        {{Form::model($user,['route'=>['avatar-update',$user->username],'method'=>'POST','enctype'=>'multipart/form-data'])}}
          {{Form::file('avatar',['hidden'=>'hidden','class'=>'inputAvatar','accept'=>'image/*'])}}
          {{Form::submit('',['hidden'=>'hidden','class'=>'avatarSubmit'])}}
        {{Form::close()}}
    @else
    <div class="panel-body ">
    @endif
      <img src="{{!isset($userProfile['attribute_avatar']) ?  asset('img/defaultmanavatar.png'):$userProfile['attribute_avatar'] }}">
    </div>
<div class="user-info text-center">
  <span class="">{{$user->name}}</span>
  <p>{{!isset($userProfile['attribute_country']) ? '':$userProfile['attribute_country']}}</p>
  <p>Joined {{date('M Y', strtotime($user->created_at))}}</p>
</div>

  </div>
</div>
