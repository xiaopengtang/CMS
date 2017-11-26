/*!
 * create by txp
 * version:1.0.0
 * email:txp_email@126.com
 * last update:2017-11-26 06:30:03
 */
exports.ids = [0];
exports.modules = {

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Index = undefined;

var _index = __webpack_require__(58);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Index = _index2.default;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Index = class Index extends _react.Component {
	render() {
		return _react2.default.createElement(
			_layout.Home,
			null,
			'hello world'
		);
	}
};
exports.default = Index;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _Home2 = __webpack_require__(60);

var _Home3 = _interopRequireDefault(_Home2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _Home3.default;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _antd = __webpack_require__(57);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { Header, Footer, Sider, Content } = _antd.Layout;

let Index = class Index extends _react.Component {
	render() {
		return _react2.default.createElement(
			_antd.Layout,
			null,
			_react2.default.createElement(
				Header,
				null,
				'Header'
			),
			_react2.default.createElement(
				Content,
				null,
				this.props.children
			),
			_react2.default.createElement(
				Footer,
				null,
				'Footer'
			)
		);
	}
};
exports.default = Index;

/***/ })

};;