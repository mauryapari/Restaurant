const path = require('path');


module.exports = {
    entry: './src/index.js',
    output:{
        path: path.join(__dirname,'/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port:3010,
        watchContentBase: true,
        contentBase:"./src"
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    }
};