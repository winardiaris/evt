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
        $profiles = (new ProfileController)->getUserProfile(Auth::user());
        $options = (new OptionsController)->getUserOption(Auth::user());

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

  public function donate(){
    return view('pages.donate');
  }
  public function searchGet(Request $request){
    $search = $request->search;
    return view('pages.searchresult',compact('search'));
  }
  public function searchPost(Request $request){
    $search = $request->search;
    $request->session()->flash('search', $search);
    return redirect('/search/'.$search)->with('search',$search);
  }

}
