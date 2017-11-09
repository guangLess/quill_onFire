//webpeck.config.js

const path = require('path')

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    
}

module.exports = config