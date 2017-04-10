<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
/* use Illuminate\Support\Facades\Auth; */
use Auth;
use App\User;
use App\UsersProfile;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /* public function __construct() */
    /* { */
    /*     $this->middleware('auth'); */
    /* } */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
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
        return view('welcome');
    }
}
