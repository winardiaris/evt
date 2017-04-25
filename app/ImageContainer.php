<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImageContainer extends Model
{
  //
  protected $table = 'image_container';
  protected $fillable = ['users_id','image_type','image_url'];

  public function user(){
    return $this->belongsTo('App\User','users_id');
  }
}
