import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default async(){
	const pager = await new Promise(resolve => require.ensure([], (require) => resolve(require('../pager'))))
    const routes = {
    	'path': '/',
        'name': 'Home',
        'component': pager.Home.Index
    }
    return new Router({
    	'mode': 'history',
	    // 'base': __dirname,
	    routes
    })
}