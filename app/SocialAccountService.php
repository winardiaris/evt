<?php

namespace App;

use Laravel\Socialite\Contracts\User as ProviderUser;
use Illuminate\Support\Facades\Hash;

class SocialAccountService
{
  public function createOrGetUser(ProviderUser $providerUser)
  {
    $account = SocialAccount::whereProvider('facebook')
      ->whereProviderUserId($providerUser->getId())
      ->first();

    if ($account) {
      return $account->user;
    } else {
      $account = new SocialAccount([
        'provider_user_id' => $providerUser->getId(),
        'provider' => 'facebook',
        'avatar' => 'https://graph.facebook.com/v2.8/'.$providerUser->getId().'/picture?width=1920'

      ]);

      $user = User::whereEmail($providerUser->getEmail())->first();
      if (!$user) {
        $_tmpuser = explode("@",$providerUser->getEmail());
        $_username = $_tmpuser[0];
        $user = User::create([
          'email' => $providerUser->getEmail(),
          'name' => $providerUser->getName(),
          'username' => $_username,
          'password' =>  Hash::make($providerUser->getId()),

        ]);

      }

      $account->user()->associate($user);
      $account->save();

      return $user;
    }
  }
}
