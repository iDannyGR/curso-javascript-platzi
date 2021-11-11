const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.js|jsx$/,
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
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            template:'./public/index.html',
            filename: './index.html'
        })
    ],
    devServer:{
        static:path.join(__dirname,'dist'),
        compress:true,
        port: 3006,
    }   
}