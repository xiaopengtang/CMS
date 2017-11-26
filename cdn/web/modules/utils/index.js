import axios from 'axios'

export const async_import = cb => new Promise(resolve => cb(source => {
	const aim = '__esModule' in source && source.__esModule && source.default || source
    resolve(aim)
}));

export const type = data => {
	const r = /\[object (\w+)\]/
	if(!r.test(Object.prototype.toString.apply(data))){
		return 'null'
	}
	const ret = RegExp.$1
	return ret.toLowerCase()
}

export const isFunction = data => type(data) === 'function'

export const isString = data => type(data) === 'string'

export const isObject = data => type(data) === 'object'

export const queryString = (name, search) => {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
    search = search || typeof window !== 'undefined' && window.location.search || ''
    let r = search.substr(1).match(reg)
    return r !== null ? unescape(r[2]) : null
}