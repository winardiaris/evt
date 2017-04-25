<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FriendList extends Model
{
  protected $table = "friend_list";
  protected $fillable = ['users_id','friend_users_id','allow'];

  public function user(){
    return $this->belongsTo('App\User','users_id');
  }
}
