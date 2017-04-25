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
      $user=User::where('username',$request->session()->get('username', 'default'))->first();
      $user->friends()->save($create);
      // return redirect()->route('profile-view',['username'=>$user->username]);
      return redirect()->back();
      // return dd($request);
    }
    public function isfriend($user,$friend_users_id){
      $friendlist = $user->friends()->where('friend_users_id',$friend_users_id)->first();
      if(count($friendlist)>0){
        if($friendlist->allow){
          $return = array('isfriend'=>true,'isapproved'=>true);
        }else{
          $return = array('isfriend'=>true,'isapproved'=>false);
        }
      }
      else{
          $return = array('isfriend'=>false,'isapproved'=>false);
      }
      return $return;
    }
}
