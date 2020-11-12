const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ['./src/app.js', './src/sass/index.scss'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'docs'),
    },
    devServer: {
      port: 8080,
      contentBase: path.resolve(__dirname, 'docs'),
    //   hot: true
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'assets/css/[name].css', }),
        new CopyPlugin({
            patterns: [
                { from: 'src/img/favicon_package_v0.16', to: 'assets/img/favicon_package_v0.16/' },
                // { from: 'src/img/svg', to: 'assets/img/svg/' },
                { from: 'src/data', to: 'assets/data' },
            ],
        }),
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|tiff|webp)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/img/[name].[ext]',
                    publicPath: '/'
                }
            }
        ],
    },
};
