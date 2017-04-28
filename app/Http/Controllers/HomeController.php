<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Post;
/* use Illuminate\Support\Facades\Auth; */

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      if(Auth::user()){
        $request->session()->reflash();
        $posts = Post::with('getImages.container','getCategories.category','user')
                  ->orderBy('time_start','desc')
                  ->get();
        (new GeneralController)->userAutoLoad();
        return view('welcome',compact('posts'));
      }
      else{
        $posts = Post::with('getImages.container','getCategories.category','user')
                  ->orderBy('time_start','desc')
                  ->limit(10)
                  ->get();
        return view('welcome',compact('posts'));
      }
    }
}
