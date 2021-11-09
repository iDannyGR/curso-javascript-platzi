const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');



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
      new CopyPlugin({
          patterns: [
              {
                  from: path.resolve(__dirname, 'src', 'asset/images')
              }
          ]
      })
    ], 
}

