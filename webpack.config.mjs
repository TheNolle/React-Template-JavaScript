import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { fileURLToPath } from 'url'
import path from 'path'

const { loader } = MiniCssExtractPlugin
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const entry = './src/index.js'

export const moduleRules = {
    rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'], resolve: { fullySpecified: false } },
        { test: /\.s[ac]ss$/i, use: [loader, 'css-loader', 'sass-loader'] },
        { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
        { test: /\.pdf$/, use: [{ loader: 'file-loader', options: { name: '[path][name].[ext]' } }] }
    ],
}

export const resolve = {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
}

export const output = {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
}

export const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        templateParameters: {
            PUBLIC_URL: process.env.PUBLIC_URL || '',
        },
    }),
    new MiniCssExtractPlugin({
        filename: 'style.css',
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: './public/favicon.ico',
                to: 'favicon.ico',
            },
        ],
    }),
]

export const devServer = {
    static: {
        directory: './dist',
    },
    historyApiFallback: true,
    allowedHosts: ['school.thenolle.com'],
}

export default {
    entry,
    module: moduleRules,
    resolve,
    output,
    plugins,
    devServer,
}
