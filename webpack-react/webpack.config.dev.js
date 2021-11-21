const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve:{
        extensions: ['.js', '.jsx'], //extesiones para react
        alias: {
            '@components':path.resolve(__dirname, 'src/components/'),
            '@containers':path.resolve(__dirname, 'src/containers/'),
            '@pages':path.resolve(__dirname, 'src/pages/'),
            '@styles':path.resolve(__dirname, 'src/styles/'),
            '@icon':path.resolve(__dirname, './src/assets/icons/'),
            '@images':path.resolve(__dirname, 'src/assets/images/'),          
        },
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
                test: /\.s[ac]ss|.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',       
                    ]
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp)$/,
                type: 'asset/resource',
                generator:{
                    filename:'assets/pictures/[hash][ext]',
                }
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
        historyApiFallback: true,
        port: 3006,
        open:true,
    }   
}