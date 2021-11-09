const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExPlugin = require('mini-css-extract-plugin');
<<<<<<< HEAD
const CopyPlugin = require('copy-webpack-plugin');
=======
const CopyWebpack = require('copy-webpack-plugin');
>>>>>>> 4d53f4092460a3c25aa79ef717a62cf1a19b6f52

module.exports={
    entry: './src/index.js', // permite decir el punto de entrada
    output:{
        path: path.resolve(__dirname,'dist'), // carpeta donde se guarda
        filename: 'main.js', //nombre del archivo final
    },
    resolve:{ //extensiones que tendremos en el proyecto para
        extensions: ['.js'] //los lea webpack
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
            }
        ]
    },
    plugins:[
      new HtmlWebpackPlugin({ //configuracion
          inject:true,
          template:'./public/index.html', //donde leera el archivo HTML
          filename:'./index.html' //salida de archivo html
      }),
      new MiniCssExPlugin(),
<<<<<<< HEAD
      new CopyPlugin({
          patterns: [
              {
                  from: path.resolve(__dirname, 'src', 'asset/images')
=======
      new CopyWebpack({
          patterns: [
              {
                  from: path.resolve(__dirname,"src","assets/images"),
                  to: "assets/images"
>>>>>>> 4d53f4092460a3c25aa79ef717a62cf1a19b6f52
              }
          ]
      })
    ], 
}

