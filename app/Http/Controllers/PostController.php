<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Alert;
use Illuminate\Support\Facades\DB;

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
      $currency = DB::table('currency')->pluck('currency_code','id');
      return view('post.create',compact('user','currency'));
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
