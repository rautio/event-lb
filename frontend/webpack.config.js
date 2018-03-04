// Webpack Config
var webpack = require('webpack');
var BabiliPlugin = require('babili-webpack-plugin');
var path = require('path');
var env = require('yargs').argv.env;

//Change this to your library name
//Also remember to change the 'main' entry point in package.json
var outputName = 'event-lb';
var outputFile = outputName + '.js';
var plugins = [];

//For build mode we output a minified file. This is what will be published to npm.
//Otherwise we can use the unminified version for development and debugging.
if(env === 'build'){
  plugins.push(new BabiliPlugin());
  // This is where we could distinguish a .min.js version for build
  // But I'm keeping both versions as .js for now for ease of development
}

//For using fetch
plugins.push(new webpack.ProvidePlugin({
    'Promise': 'es6-promise', // (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
    'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
}));

//The default entry point is app/index.js
//The default output is build/event-lb.min.js or .js
var config = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    path.resolve(__dirname, './app/index.js')
  ],
  devtool: 'source-map',
  node: { fs: 'empty' },
  plugins: plugins,
  target: 'web',
  devServer:{
    contentBase: '.',
    watchContentBase: true
  },
  output: {
    path: __dirname + '/build',
    filename: outputFile,
    library: outputName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
};

module.exports = config;
