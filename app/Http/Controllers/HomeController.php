<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
/* use Illuminate\Support\Facades\Auth; */

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /* public function __construct() */
    /* { */
    /*     $this->middleware('auth'); */
    /* } */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      $request->session()->reflash();
      $posts = Post::with('getImages.container','getCategories.category','user')->orderBy('time_start','desc')->get();
      (new GeneralController)->userAutoLoad();
      return view('welcome',compact('posts'));
    }
}
