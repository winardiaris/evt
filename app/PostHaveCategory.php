<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostHaveCategory extends Model
{
    //
    protected $table = 'post_have_categories';
    protected $fillable = [
        'post_id','category_id',
    ];
    public function post(){
        return $this->belongsTo('App\Post');
    }
    public function category(){
        return $this->hasOne('App\PostCategory','id','category_id');
    }

}
