<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\DB;
//============
use App\User;
use App\UsersProfile;


class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function view(Request $request,$username){
      $user=User::where('username',$username)->first();
      return view('profile.view',compact('user'));
    }
    public function edit($username){
      $user=User::where('username',$username)->first();
      $data_country = DB::table('country_list')->pluck('country_name','country_id');
      $data_profile=UsersProfile::select('attribute_name','attribute_value')->where('users_id',$user->id)->get();
      $ar_name = array();
      $ar_value = array();
      foreach($data_profile as $prof){
        array_push($ar_name,$prof->attribute_name);
        array_push($ar_value,$prof->attribute_value);
      }
      $profile = array_combine($ar_name,$ar_value);
      /* return dd($profile); */


      return view('profile.edit',compact('user','data_country','profile'));
    }
    public function update(Request $request){
      if($request){
        $user = User::find($request->id);
        $user->name =  $request->name;
        $user->username =  $request->username;
        $user->email =  $request->email;
        $user->update();


        foreach($request->request as $key => $value){
          if(strpos($key,'attribute')!==false){
            $userprofile = UsersProfile::where('users_id',$request->id)->where('attribute_name',$key)->first();
            if(count($userprofile)>0){
              $userprofile->update([
                'attribute_value'=>$value
              ]);
            }else{
              UsersProfile::create([
                'users_id'=>$request->id,
                'attribute_name'=>$key,
                'attribute_value'=>$value
              ]);
            }
          }
        }
      }
    }
}
