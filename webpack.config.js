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
            jQuery: 'jquery',
            Popper: 'popper.js'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        modules: [
            './app/components/',
            './app/actions/',
            './app/reducers/',
            '.app/store/',
            './node_modules'
        ],
        alias: {
            jquery: path.resolve(__dirname, 'node_modules/jquery/src/jquery.js'),
            popperJS: path.resolve(__dirname, 'node_modules/popper.js/dist/umd/popper.js'),
            applicationStyles: path.resolve(__dirname,'app/styles/app.scss'),
            bootstrapStyle: path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css'),
            bootstrapJs: path.resolve(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.js'),
            configureStore: path.resolve(__dirname, 'app/store/configureStore.jsx')
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