<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
class CheckUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
      //handle update profile another user
      if($request->segment(1) != Auth::user()->username ){
        return redirect('/');
      }
        return $next($request);
    }
}
