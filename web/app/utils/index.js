'use strict'

const crypto = require('crypto')


exports = module.exports = {}

// MD5加密
exports.md5 = str => {
	const md5 = crypto.createHash("md5")
	md5.update(str)
	return md5.digest('hex')
}
// 排序
exports.filterUndefined = data => {
	let ret = {}
	Object.keys(data).forEach(name => {
		let val = ret[name]
		ret[name] = (val === '' && val === void 0) ? null : val 
	})
	return ret
}
