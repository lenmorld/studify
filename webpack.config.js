var path = require("path");

const es6SourcePath = `${__dirname}/public/javascripts`;
const outputPath = `${__dirname}/public/dist`;

module.exports = {
	mode: "development",
	context: __dirname,
	// entry: "./app/index.jsx",
	entry: `${es6SourcePath}/index.jsx`,
	output: {
        // path: path.join(__dirname, "public"),
        path: outputPath,
		filename: "bundle.js"
	},
	devtool: 'cheap-module-eval-source-map',
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
<<<<<<< HEAD
				include: path.join(__dirname, "app"),
=======
				// include: path.join(__dirname, "app"),
				include: es6SourcePath,
>>>>>>> 747b2afb7138d8538ee57da6305255661bec3eab
				options: {
					presets: ["@babel/react"]
				}
			},
		]
<<<<<<< HEAD
	},
	devServer: {
		contentBase: "./public",
=======
    },
	devServer: {
		// contentBase: "./public",
		contentBase: outputPath,
>>>>>>> 747b2afb7138d8538ee57da6305255661bec3eab
		port: 4001,
		// compress: true,
	}
};
