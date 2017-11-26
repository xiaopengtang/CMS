'use strict'

const serivce = require('../../config/config.service')
const utils = require('../utils')
const {URL} = require('url')

exports.apiClient = function (url, param){
	return new Promise((resolve, reject) => {
		const {data} = param
		data = utils.filterUndefined(data) || {}
		const secret_arr = Object.keys(data).sort( (o,n) => o > n )
		const token = `${serivce.secret_key}@${JSON.stringify(secret_arr)}`
		param.data = {data, token}
		url = new URL(url, serivce.subSystem)
		this
		.curl(url, param)
		.then(d => {
			// 
		})
		.catch(reject)
	})
}