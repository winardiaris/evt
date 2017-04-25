<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\User;

class isAdmin
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
        $options = Auth::user()->options();
        $isAdmin = $options->where('option_name','is_admin')->get();
        if(!count($isAdmin)>0){
            return redirect('/');
        }
        return $next($request);
    }
}
