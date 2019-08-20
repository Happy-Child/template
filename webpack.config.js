const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		"home": "./src/blocks/pages/home/home.js",
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
			"%styles%": path.resolve(__dirname, "src/styles"),
			"%helpers%": path.resolve(__dirname, "src/js/helpers"),
			"%vendor%": path.resolve(__dirname, "src/js/vendor")
		}
	}
};
