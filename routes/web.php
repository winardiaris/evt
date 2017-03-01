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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'ProfileController@getAvatar');

Route::get('/a/fb', 'SocialAuthController@redirect');
Route::get('/cb/fb', 'SocialAuthController@callback');

Route::get('/{username}/',['as'=>'profile-view','uses'=> 'ProfileController@view']);

Route::group(['middleware'=>'CheckUser'],function(){
  Route::get('/{username}/profile/edit',['as'=>'profile-edit','uses'=> 'ProfileController@edit']);
  Route::post('/{username}/profile/update',['as'=>'profile-update','uses'=> 'ProfileController@update']);
});

Route::post('/a/f/{username}',['as'=>'add-friend','uses'=>'FriendListController@addfriend']);
