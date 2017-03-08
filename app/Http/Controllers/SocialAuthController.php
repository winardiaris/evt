<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\SocialAccountService;
use Socialite;

class SocialAuthController extends Controller
{
   public function redirect($provider)
   {
     $providerKey = Config::get('services.' . $provider);
     if (empty($providerKey)) {
       return 'No such provider';
     }

     return Socialite::driver($provider)->redirect();
   }

   public function callback(SocialAccountService $service,$provider)
   {
     // when facebook call us a with token
     $authUser = Socialite::driver($provider)->user();
     $user = $service->createOrGetUser($authUser,$provider);
     auth()->login($user);
     return redirect()->to('/');
   }
}
