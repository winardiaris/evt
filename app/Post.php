<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $table = 'posts';
    protected $fillable = [
        'users_id','description', 'place', 'currency_id','price','time_start','time_end',
    ];
    public function getCategories(){
        return $this->hasMany('App\PostHaveCategory','post_id');
    }
    public function getImages(){
        return $this->hasMany('App\PostImage','post_id');
    }
    public function user(){
      return $this->belongsTo('App\User','users_id');
    }
    public function currency(){
        return $this->hasOne('App\Currency','id','currency_id');
    }
}
