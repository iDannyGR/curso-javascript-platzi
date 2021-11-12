const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve:{
        extensions: ['.js', '.jsx'] //extesiones para react
    },
    mode: 'development',
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
        })
    ],
    devServer:{
        static:path.join(__dirname,'dist'),
        compress:true,
        port: 3006,
    }   
}