<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use App\ImageContainer;

class ImageContainerController extends Controller
{
  //
  public function uploadImage($users_id,$file,$type){
    $filename = str_random(20) . "." . $file->getClientOriginalExtension();
    $rand_path = '/u/'.str_random(1)."/".str_random(1)."/";
    $path = public_path() . $rand_path;
    $file->move($path, $filename);
    $image_url = $rand_path.$filename;

    ImageContainer::create([
      'users_id'=>$users_id,
      'image_type'=>$type,
      'image_url'=>$image_url
    ]);

    return $image_url;
  }
}
