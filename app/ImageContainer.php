<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImageContainer extends Model
{
  //
  protected $table = 'image_container';
  protected $fillable = ['users_id','image_type','image_url'];
}
