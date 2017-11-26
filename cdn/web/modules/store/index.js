import axios from 'axios'
import * as utils from '../utils'

export const clientCall = async(setting, value) => {
	setting = isObject(setting) ? setting
	: isString(setting) ? {url: setting, data: value} : {}
	let {url, data, method} = setting || {}
	const G = typeof window !== 'undefined' ? window.G : {'isApp': false}
	url = (G.isApp ? 'http://1989591.51vip.biz:7001': '') + url
	method = method || 'get'
	const isGET = /get/i.test(method)
	const params = {
		url,
		method: method,
		data: isGET ? null : data,
		params: isGET ? data : null, 
		responseType: 'json',
		transformRequest: [function (data) {
		    let ret = []
		    for (let it in data) {
		      ret.push(`${encodeURIComponent(it)}=${encodeURIComponent(data[it])}`)
		    }
		    return ret.join('&')
		}]
	}
	if(/post/i.test(params.method)){
		params.headers = {
		    'Content-Type': 'application/x-www-form-urlencoded'
		}
	}
	return new Promise(resolve => axios(params).then(api => resolve(api.data)).catch(() => resolve({'success': false, 'data': null, 'msg': null, 'errorCode': 900001}))) 
}