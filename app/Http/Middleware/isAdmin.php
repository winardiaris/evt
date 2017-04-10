<?php

namespace App\Http\Middleware;

use Closure;
use App\Auth;
use App\User;
use App\OptionsController;

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
        $isAdmin = (new OptionController)->isAdmin(Auth::user()->id);
        if($isAdmin == false ){
            return redirect('/');
        }
        return $next($request);
    }
}
