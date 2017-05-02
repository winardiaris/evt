<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Alert;

use App\User;
use App\Post;
use App\ImageContainer;

class PostController extends Controller
{
    //
    public function __construct()
    {
      $this->middleware('auth');
    }
    public function view(Request $request,$username,$id){
      $post = Post::find($id)->first();
      return view('post.view',compact('post'));
    }
    public function create(){
      $user=Auth::user();
      return view('post.create',compact('user'));
    }
    public function save(Request $request){
      return dd($request);
    }
    public function edit(){

    }
    public function update(){

    }
    public function category($id){
        return "keluar post berdasarkan category id:".$id;
    }
}
