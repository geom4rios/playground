const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');//remove unused files from public
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//remove dead code and minimize code as much as possible

module.exports = {
    entry: './app/app.jsx',
    plugins: [
        /*new UglifyJSPlugin({
            sourceMap: true
        }),*/
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        modules: [
            './app/components',
            './node_modules'
        ],
        alias: {
            jquery: "jquery/src/jquery",
            applicationStyles: path.resolve(__dirname,'app/styles/app.scss'),
            bootstrapStyle: 'node_modules/bootstrap/dist/css/bootstrap.css',
            bootstrapJs: 'node_modules/bootstrap/dist/js/bootstrap.js'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    devtool: 'source-map'
};