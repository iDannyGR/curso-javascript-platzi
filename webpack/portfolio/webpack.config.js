const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
            }
        ]
    },
    plugins:[
      new HtmlWebpackPlugin({ //configuracion
          inject:true,
          template:'./public/index.html', //donde leera el archivo HTML
          filename:'./index.html' //salida de archivo html
      })
    ],
}

