var webpack = require('webpack');

module.exports = {
    output: {
        filename: './dist/[name].js'
    },
    entry: {
        vendor: [
            'react',
            'react-dom'
        ],
        app: './src/index.jsx'
    },

    module: {
        loaders: [
            {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}},
            {test: /\.scss$/, exclude: /node_modules/, loaders: ["style", "css", "sass"]}
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', './dist/vendor.js'),
    ]
}
