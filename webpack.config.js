const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'docs'),
    },
    // devServer: {
    //   port: 8080,
    //   contentBase: path.resolve(__dirname, 'dist'),
    //   hot: true
    // }
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
        ],
    },
};
