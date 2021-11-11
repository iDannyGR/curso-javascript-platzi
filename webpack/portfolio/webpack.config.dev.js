const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzer=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



module.exports={
    entry: './src/index.js', // permite decir el punto de entrada
    output:{
        path: path.resolve(__dirname,'dist'), // carpeta donde se guarda
        filename: '[name].[contenthash].js', //nombre del archivo final
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    mode:'development',
    devtool:'source-map',
    resolve:{ //extensiones que tendremos en el proyecto para
        extensions: ['.js'], //los lea webpack
        alias: {
            '@utils':path.resolve(__dirname, 'src/utils/'),
            '@templates':path.resolve(__dirname, 'src/templates/'),
            '@styles':path.resolve(__dirname, 'src/styles/'),
            '@assets':path.resolve(__dirname, 'src/assets/images/'),
        }
    }, 
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use:[MiniCssExPlugin.loader,
                'css-loader'
            ],
            },
            {
               test:/\.png/,
               type: 'asset/resource' 
            },
            {
                test:/\.(woff|woff2)$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit:10000,
                        mimetype:"aplication/font-woff",
                        name: "[name].[ext]",
                        outputPatch: "./assets/fonts/",
                        publicPatch: "./assets/fonts/",
                        esModule:false,
                    },
                }
            }
        ]
    },
    plugins:[
      new HtmlWebpackPlugin({ //configuracion
          inject:true,
          template:'./public/index.html', //donde leera el archivo HTML
          filename:'./index.html' //salida de archivo html
      }),
      new MiniCssExPlugin({
          filename:'assets/[name].[contenthash].css'
      }),
      new CopyPlugin({
          patterns: [
              {
                  from: path.resolve(__dirname, 'src', 'assets/images')
              }
          ]
      }),
      new Dotenv(),
      new BundleAnalyzer(),
    ],
    devServer:{
        static: path.join(__dirname, 'dist'),
        compress:true,
        historyApiFallback:true,
        port:3006,
        open: true,
    }
}

