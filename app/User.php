<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','username', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function profiles(){
       return $this->hasMany('App\UsersProfile','users_id');
    }
    public function options(){
       return $this->hasMany('App\UsersOption','users_id');
    }
    public function friends(){
       return $this->hasMany('App\FriendList','users_id');
    }
    public function posts(){
       return $this->hasMany('App\Post','users_id');
    }
    public function images(){
       return $this->hasMany('App\ImageContainer','users_id');
    }

}
