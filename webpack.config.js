const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


//=============================================
// CSS EXTRACTION PLUGIN - currently disabled
// The fallback (style-loader) is used when
// disabled.
//=============================================
const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: true //process.env.NODE_ENV === "development"
});

//=============================================
// Provide PLUGIN - making things available
//=============================================
const provideVars = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    'window.jQuery': 'jquery',
});


//=============================================
// The actual WEBPACK Configuration
//=============================================

module.exports = {
    entry: {
      dgi: './dgi-demo/app/main.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader', options: {sourceMap: false}},
                    {loader: 'css-loader', options: {importLoaders: 1, sourceMap: false}}
                ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {loader: 'css-loader', options: {importLoaders: 1, sourceMap: true}},
                        'resolve-url-loader',
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [
                                    path.resolve(__dirname, "scss/")
                                ],
                                sourceMap: true
                            }
                        }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash].[ext]'
                        }
                    }
                ],

            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        watchOptions: {
            ignored: /node_modules/
        },
        historyApiFallback: {
          index: "dgi-demo/index.html"
        },
        publicPath: path.resolve(__dirname, '/'),
    },
    plugins: [
        provideVars,
        extractSass,
        new webpack.NoEmitOnErrorsPlugin(),
        // https://webpack.js.org/plugins/hot-module-replacement-plugin/
        new webpack.HotModuleReplacementPlugin({}),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: "[name].bundle.js.map",
        path: path.resolve(__dirname, 'dgi-demo')
    }
};
