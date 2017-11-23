'use strict';
module.exports = app => {
    class HomeController extends app.Controller {
	    * index(ctx) {
	    	this.ctx.body = {'message': 'hello world'}
	    }
    }
    return HomeController;
}
