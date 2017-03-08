<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['as'=>'home','uses'=>'HomeController@index']);

Auth::routes();

Route::get('/home', 'ProfileController@getAvatar');
$s = 'social.';
Route::get('/a/{provider}', ['as'=>$s.'redirect','uses'=>'SocialAuthController@redirect']);
Route::get('/cb/{provider}', ['as'=>$s.'callback','uses'=>'SocialAuthController@callback']);

Route::get('/{username}/',['as'=>'profile-view','uses'=> 'ProfileController@view']);

Route::group(['middleware'=>'CheckUser'],function(){
  Route::get('/{username}/profile/edit',['as'=>'profile-edit','uses'=> 'ProfileController@edit']);
  Route::post('/{username}/profile/update',['as'=>'profile-update','uses'=> 'ProfileController@update']);
  Route::post('/{username}/u/av',['as'=>'avatar-update','uses'=> 'ProfileController@avatarUpdate']);
});

Route::post('/a/f/{username}',['as'=>'add-friend','uses'=>'FriendListController@addfriend']);
