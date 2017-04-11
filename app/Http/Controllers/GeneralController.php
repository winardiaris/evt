<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use App\UsersProfile;

class GeneralController extends Controller
{
  //
  public static function uploadImage($file){
    $urlImage = "urlImage";
    return $urlImage;
  }
  public function userAutoLoad(){
      if (Auth::check()) {
        $user = User::find(Auth::id())->first();
        $profiles = (new ProfileController)->getUserProfile(Auth::user()->id);
        $options = (new OptionsController)->getUserOption(Auth::user()->id);

        session([
          'user_id'=>Auth::id(),
          'username'=>Auth::user()->username,
          'name'=>Auth::user()->name,
        ]);
        if(isset($profiles)){
          if(count($profiles)>0){
            foreach($profiles as $key => $value){
              session([$key=>$value]);
            }
          }
        }
      }

  }
}
