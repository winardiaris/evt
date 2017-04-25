<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostImage extends Model
{
    //
    protected $fillable = [
        'post_id','image_container_id',
    ];
    public function post(){
      return $this->belongsTo('App\Post');
    }
    public function container(){
      return $this->hasOne('App\ImageContainer','id','image_container_id');
    }
}
