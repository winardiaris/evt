<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersOption extends Model
{
    //
    protected $table = "users_option";
    protected $fillable = [
      'users_id','option_name', 'option_value',
    ];
    public function user(){
      return $this->belongsTo('App\User','users_id');
    }
}
