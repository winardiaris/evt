<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersProfile extends Model
{
    protected $table = "users_profile";
    protected $fillable = [
      'users_id','attribute_name', 'attribute_value',
    ];
}
