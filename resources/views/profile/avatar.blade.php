<div class="user-avatar">
  <div class="panel panel-default">
    <div class="panel-body">
      <img src="{{!isset($userProfile['attribute_avatar']) ?  asset('img/defaultmanavatar.png'):$userProfile['attribute_avatar'] }}">
    </div>
<div class="user-info text-center">
  <span class="">{{$user->name}}</span>
  <p>{{!isset($userProfile['attribute_country']) ? '':$userProfile['attribute_country']}}</p>
  <p>Joined {{date('M Y', strtotime($user->created_at))}}</p>
</div>

  </div>
</div>
