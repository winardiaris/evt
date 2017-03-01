<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Facade;
//============
use App\User;
use App\UsersProfile;
use App\CountryList;
use App\FriendList;



class ProfileController extends Controller
{
    public function __construct()
    {
      $this->middleware('auth');
    }
    public function view(Request $request,$username){
      $user=User::where('username',$username)->first();
      $userProfile = $this->getUserProfile($username);
			$isfriend = (new FriendListController)->isfriend(Auth::user()->id,$user->id);
			$isapproved = (new FriendListController)->isapproved(Auth::user()->id,$user->id);
      return view('profile.view',compact('user','userProfile','isfriend','isapproved'));
    }
    public function edit($username){
      $user=User::where('username',$username)->first();
      $data_country = DB::table('country_list')->pluck('country_name','country_id');
      $userProfile = $this->getUserProfile($username);

      return view('profile.edit',compact('user','data_country','userProfile'));
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
				return redirect()->route('profile-view',['username'=>$user->username]);
      }
    }
    public static function getAvatar(){
      $user_id =  Auth::user()->id;
      $avatar =  UsersProfile::select('attribute_value')->where('users_id',$user_id)->where('attribute_name','attribute_avatar')->first();
      return $avatar->attribute_value;
    }
		public function getUserProfile($username){
      $user=User::where('username',$username)->first();
      $data_profile=UsersProfile::select('attribute_name','attribute_value')->where('users_id',$user->id)->get();
			$profile='';
			if($data_profile->count()>0){
				$ar_name = array();
				$ar_value = array();
				$attribute_country_id ='';
				foreach($data_profile as $prof){
					array_push($ar_name,$prof->attribute_name);
					array_push($ar_value,$prof->attribute_value);
					if($prof->attribute_name == 'attribute_country_id'){
						$attribute_country_id = $prof->attribute_value;
					}
				}
				$country_list=CountryList::where('country_id',$attribute_country_id)->first();
				array_push($ar_name,'attribute_country');
				array_push($ar_value,$country_list->country_name);
				$profile = array_combine($ar_name,$ar_value);
			}
			return $profile;
		}

}
