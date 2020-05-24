const path = require('path');
// Babelの機能のminifyを利用するため
const BabelMinifyPlugin = require("babel-minify-webpack-plugin");
// ビルドする際にHTMLも同時に出力するため
const HtmlWebpackPlugin = require('html-webpack-plugin');
// CSSをJSにバンドルせずに出力するため
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    // pathの設定についてですがpathモジュールを使う必要は特にはありません。
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        historyApiFallback: true, // これがないとルーティングできない
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // scssのローダ設定
            {
                test: [/\.css$/, /\.scss$/],
                exclude: /node_modules/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader?modules', 'postcss-loader', 'sass-loader'],
            },
            // js,ts,tsxのローダ設定
            {
                test: [/\.ts$/, /\.tsx$/, /\.js$/],
                loader: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    plugins: [
        new BabelMinifyPlugin(),
        new HtmlWebpackPlugin({
            publicPath: 'dist', // ビルド後のHTMLの出力先
            filename: 'index.html', //出力するHTMLのファイル名
            template: 'src/html/index.html', //出力するためのHTMLのテンプレート
        }),
        new MiniCssExtractPlugin({
            publicPath: 'dist', // ビルド後のCSSの出力先
            filename: 'app.css', //出力するCSSのファイル名
        }),
    ],
}
