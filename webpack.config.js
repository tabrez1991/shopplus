const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require("fs");
module.exports = {
	entry: ["babel-polyfill", "./src/index.js"],

	output: {
		publicPath: "/",
		filename: "./main.js"
	},

	resolve: {
		extensions: [".js", ".jsx"]
	},
	node: {
		fs: "empty"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: "public/img/[name].[ext]",
						outputPath: "dist/img/"
					}
				}
			},
			{
				test: /\.(s*)css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},

			{
				test: /\.html$/,
				use: {
					loader: "html-loader",
					options: {
						minimize: true
					}
				}
			},
			{
				test: /\.(otf|ttf|eot|woff|woff2)$/,
				loader: "file-loader",
				options: {
					name: "public/fonts/[name].[ext]",
					outputPath: "dist/fonts"
				}
			}
		]
	},

	plugins: [
		new ExtractTextPlugin({ filename: "style.css" }),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
			hash: true
		})
	],

	devServer: {
		inline: true,
		historyApiFallback: true,
		publicPath: "/",
		contentBase: "./dist",
		disableHostCheck: true
	}
};
