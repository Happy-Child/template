const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		"common": "./src/js/common.js",
		"about-us": "./src/blocks/pages/about-us/about-us.js",
		"critical-scripts": "./src/js/critical-scripts.js"
	},

	plugins: [
		new webpack.ProvidePlugin({
			"$": "jquery",
			"jQuery": "jquery"
		})
	],

	output: {
		filename: "[name].js",
		chunkFilename: "[name].js",
		publicPath: "/"
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					safari10: true
				},
			}),
		]
	},

	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				query: {
					presets: [
						["@babel/preset-env", { modules: false }]
					]
				}
			}
		}
		]
	},

	resolve: {
		alias: {
			"%blocks%": path.resolve(__dirname, "src/blocks"),
			"%js%": path.resolve(__dirname, "src/js"),
			"%helpers%": path.resolve(__dirname, "src/js/helpers"),
			"%vendor%": path.resolve(__dirname, "src/js/vendor")
		}
	}
};
