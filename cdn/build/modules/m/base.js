'use strict'

const webpack = require('webpack')
const moment = require('moment')
const pkg = require('../../../package.json')
const header = [
    `create by ${pkg.author}`
    ,`version:${pkg.version}`
    ,`email:${pkg.email}`
    ,`last update:${moment().format("YYYY-MM-DD hh:mm:ss")}`
].join("\n")

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractLess = new ExtractTextPlugin('style.css')

module.exports = {
	'plugins': [
	    new webpack.BannerPlugin(header),
	    extractLess
	],
	'module': {
		'rules': [
		    {
                "test" : /\.css$/,
                // "exclude" : /node_modules/,
                "use" : extractLess.extract({
                    'fallback': 'style-loader',
                    'use': ['css-loader', 'postcss-loader']
                }) //["style-loader","css-loader?modules", "postcss-loader"]
            },
            {
                "test" : /\.(woff)|(svg)|(eot)|(ttf)$/,
                "exclude" : /node_modules/,
                "use" : {
                    "loader": "url-loader"
                }
            },
            {
                "test": /\.(png)|(jpg)|(gif)$/,
                "exclude" : /node_modules/,
                "use" : ["file-loader"]
            },
            {
                "test" : /\.less/,
                "exclude" : /node_modules/,
                'use': extractLess.extract({
                    'fallback': 'style-loader',
                    'use': ["css-loader", "postcss-loader", "less-loader"],
                    'options': {
                    	'plugins': [
						    require("autoprefixer")({
						    	browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8']
						    })
						]
                    }
                })
            }
		]
	}
}