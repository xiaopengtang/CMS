<?php
namespace App\Http\Middleware;

class ApiAuth {
	public function handle($request, Closure $next){
		return next($request) ;
	}
}