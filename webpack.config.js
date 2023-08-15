const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: [
            './src/App/index.js'
        ],
        output: {
            path: path.join(__dirname , "src","public"),
            filename: 'bundle.js',
        },
        module:{
        rules :
        [
            {
                test:/\.js$/,
                exclude: /nod_modules/,
                use:['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images', // Directorio de salida para las imágenes
                        },
                    },
                ],
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'App', 'index.html'), // Ruta válida con path.join()
            filename: './index.html'
        })
    ]
}
