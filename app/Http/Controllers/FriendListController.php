<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Http\Controllers\Controller;
use App\User;
use App\FriendList;

class FriendListController extends Controller
{
  //
    public function __construct()
    {
      $this->middleware('auth');
    }
    public function addfriend(Request $request,$username){
      $create = new FriendList([
        'friend_users_id'=>$request->friend_users_id,
        'allow'=>false
      ]);
      $user=User::where('username',$username)->first();
      $user->friends()->save($create);
      return redirect()->route('profile-view',['username'=>$username]);
    }
    public function isfriend($users_id,$friend_users_id){
      $user = User::find($users_id)->first();
      $friendlist = $user->friends()->where('friend_users_id',$friend_users_id)->first();
      if(!empty($friendlist)){
        return true;
      }
      else{
        return false;
      }
    }
    public function isapproved($users_id,$friend_users_id){
      $user = User::find($users_id)->first();
      $friendlist = $user->friends()->where('friend_users_id',$friend_users_id)->first();
      if(!empty($friendlist)){
        if($friendlist->allow){
          return true;
        }
        else{
          return false;
        }
      }
      else{
        return false;
      }
    }
}
