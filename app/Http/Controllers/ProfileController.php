<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Alert;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Facade;
//============
use App\User;
use App\UsersProfile;
use App\CountryList;
use App\FriendList;
use App\ImageContainer;
use App\Post;



class ProfileController extends Controller
{
    public function __construct()
    {
      $this->middleware('auth');
    }
    public function view(Request $request,$username){
      $user=User::where('username',$username)->first();
			if(count($user)>0){
				if($username != Auth::user()->username){
					$friend = (new FriendListController)->isfriend(Auth::user(),$user->id);
					$isfriend = $friend['isfriend'];
					$isapproved = $friend['isapproved'];

				}
				$userProfile = $this->getUserProfile($user);
				$posts = Post::with('user.profiles','getCategories.category','getImages.container')->where('users_id',$user->id)->get();
				// dd($isfriend);
				// (new GeneralController)->userAutoLoad();
				return view('profile.view',compact('user','userProfile','isfriend','isapproved','posts'));
			}
			else{
				return view('error.404');
			}
    }
    public function edit($username){
      $user=Auth::user();
      $data_country = DB::table('country_list')->pluck('country_name','country_id');
      $userProfile = $this->getUserProfile($user);
			(new GeneralController)->userAutoLoad();

      return view('profile.edit',compact('user','data_country','userProfile'));
    }
    public function update(Request $request){
      if($request){
        $user = User::find($request->id);
				if($request->username == $user->username AND $request->email != $user->email){
					$this->validate($request, [
						'name'=>'required|min:10',
						'email' => 'required|email|unique:users',
					]);
				}
				elseif($request->username != $user->username AND $request->email == $user->email){
					$this->validate($request, [
						'name'=>'required|min:10',
						'username'=>'required|min:8|unique:users',
					]);
				}
        $user->name =  $request->name;
        $user->username =  $request->username;
        $user->email =  $request->email;
        $user->update();


        foreach($request->request as $key => $value){
          if(strpos($key,'attribute')!==false){
            $userprofile = $user->profiles()->where('attribute_name',$key)->first();
            if(count($userprofile)>0){
              $userprofile->update([
                'attribute_value'=>$value
              ]);
            }else{
              $profile = ([
                'attribute_name'=>$key,
                'attribute_value'=>$value
              ]);
              $user->profiles()->create($profile);
            }
          }
				}
				Alert::success('Profile updated');
				return redirect()->route('profile-view',['username'=>$user->username]);
      }
    }
		public function getUserProfile($user){
      $data_profile = $user->profiles;
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
				if(!empty($country_list)){
					array_push($ar_name,'attribute_country');
					array_push($ar_value,$country_list->country_name);
				}
				$profile = array_combine($ar_name,$ar_value);
			}
			return $profile;
		}

		public function avatarUpdate(Request $request,$username){
      $user=User::where('username',$username)->first();
			if($request->hasFile('avatar')){
				$file = $request->file('avatar');
				$uploadImage = (new ImageContainerController)->uploadImage($user->id,$file,'avatar');
				//disini nanti response upload gambar dengan macam ukuran
				$userprofile = $user->profiles()->where('attribute_name','attribute_avatar')->first();
				if(count($userprofile)>0){
					$userprofile->update([
						'attribute_value'=>$uploadImage
					]);
				}else{
					$profile = new UsersProfile([
						'attribute_name'=>'attribute_avatar',
						'attribute_value'=>$uploadImage
					]);
          $user->profiles()->save($profile);
				}
				Alert::success('Avatar updated');
				return redirect()->back();
				/* return $uploadImage; */
			}
			Alert::error('File not supported');
			return redirect()->back();
		}

}
