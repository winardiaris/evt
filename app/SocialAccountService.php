<?php

namespace App;

use Laravel\Socialite\Contracts\User as ProviderUser;
use Illuminate\Support\Facades\Hash;

class SocialAccountService
{
  public function createOrGetUser(ProviderUser $providerUser,$provider)
  {
    $account = SocialAccount::whereProvider($provider)
      ->whereProviderUserId($providerUser->getId())
      ->first();

    if ($account) {
      return $account->user;
    } else {
      $account = new SocialAccount([
        'provider_user_id' => $providerUser->getId(),
        'provider' => $provider

      ]);

      $user = User::whereEmail($providerUser->getEmail())->first();
      if (!$user) {
        if($provider!='twitter'){
          $_tmpuser = explode("@",$providerUser->getEmail());
          $_username = $_tmpuser[0];
        }
        else{
          $_username=str_random(15);
        }
        $user = User::create([
          'email' => $providerUser->getEmail(),
          'name' => $providerUser->getName(),
          'username' => $_username,
          'password' =>  Hash::make($providerUser->getId()),

        ]);

        UsersProfile::create([
          'users_id'=>$user->id,
          'attribute_name'=>'attribute_avatar',
          'attribute_value'=>$providerUser->getAvatar()
        ]);

      }

      $account->user()->associate($user);
      $account->save();

      return $user;
    }
  }
}
