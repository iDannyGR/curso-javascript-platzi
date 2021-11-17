const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPatch:'/',
    },
    resolve:{
        extensions: ['.js', '.jsx'], //extesiones para react
        alias:{
            '@components': path.resolve(__dirname,'src/components/'),
            '@styles': path.resolve(__dirname,'src/styles/')
        }
    },
    mode: 'production',
    module:{
        rules:[
            {
                test: /\.js|jsx$/, //expresion regular para buscar extensiones
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',       
                    ]
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            template:'./public/index.html',
            filename: './index.html'
        }),
        new MiniCss({
            filename:'[name].css'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization:{
        minimize:true,
        minimizer:[
            new CssMinimizer(),
            new TerserPlugin(),
        ],
        devServer:{
            historyApiFallback:true,
        }
    }
}