import 'babel-polyfill'
import render from './modules'
import 'antd/lib/button/style/css'
import style from './style/index'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import React from 'react'
import Dom from 'react-dom'

const client = async() => {
	const Component = await render()
	const body = document.querySelector('.wrap')
	const forceRefresh = 'pushState' in window.history
	Dom.render((
		<BrowserRouter forceRefresh={forceRefresh}>
		    <Component />
		</BrowserRouter>
	), body)
}

client().then(() => console.log('初始化完成...'))
