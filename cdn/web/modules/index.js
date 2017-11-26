import React, {Component, cloneElement} from 'react'

import * as $utils from './utils'
import * as ReactRouter from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as $store from './store'
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'
import Pages from './pages'

const {BrowserRouter, Route, Switch, IndexRoute, HashRouter, matchPath} = ReactRouter
export default async config => {
	const Home = await Pages.Home
	return class Base extends Component{
		render () {
			return (
			    <Route path="" render={props => {
			    	return (
			    		<ReactCSSTransitionGroup
						transitionName="pager-transition"
				        component="div"
				        className="container-wrap"
				        transitionAppear={true}
				        transitionLeave={false}>
				            <div className="pager-content" key={props.location.pathname}>
				                <Route path="/" component={Home.Index} />
				            </div>
				        </ReactCSSTransitionGroup>
			    	)
			    }}/>
			)
		}
	}
}
