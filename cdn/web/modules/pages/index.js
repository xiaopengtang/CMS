import * as utils from '../utils'

export default {
	get Home () {
		return utils.async_import(resolve => require.ensure([], require => resolve(require('./Home'))))
	}
}