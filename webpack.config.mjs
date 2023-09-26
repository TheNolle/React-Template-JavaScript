import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackShellPluginNext from 'webpack-shell-plugin-next'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const entry = './src/index.jsx'

export const module = {
    rules: [
        { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } } },
        { test: /\.(sa|sc|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(png|jpe?g|gif)$/i, use: [{ loader: 'file-loader' }] },
    ],
}

export const resolve = {
    extensions: ['.js', '.jsx'],
}

export const output = {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
}

export const devServer = {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
}

export const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
    }),
    new WebpackShellPluginNext({
        onBeforeBuild: {
            scripts: [
                'rm -rf dist',
                'clear',
            ],
            blocking: true,
            parallel: false,
        },
        onAfterDone: {
            scripts: [
                `node -e "const fs = require('fs'); const content = 'RewriteEngine On\\n\\n# If an existing asset or directory is requested go to it as it is\\nRewriteCond %%{DOCUMENT_ROOT}%%{REQUEST_URI} -f [OR]\\nRewriteCond %%{DOCUMENT_ROOT}%%{REQUEST_URI} -d\\nRewriteRule ^ - [L]\\n\\n# If the requested resource doesn\\'t exist, use index.html\\nRewriteRule ^ /index.html\\n\\n\\n# © 2023 Nolly | Website: thenolle.com | Github: @TheNolle | Patreon: @_nolly'; fs.writeFileSync('dist/.htaccess', content);"`,
                `node -e "(async () => { const chalk = await import('chalk'); console.log(chalk.default.green('\\n\\n\\n\\n\\nBuild Successful!')); console.log(chalk.default.cyan('\\nTo serve the built project on Apache:')); console.log(chalk.default.yellow('1. Copy the dist folder contents to your Apache directory.')); console.log(chalk.default.yellow('2. Ensure mod_rewrite is enabled: sudo a2enmod rewrite')); console.log(chalk.default.yellow('3. Restart Apache: sudo systemctl restart apache2')); console.log(chalk.default.yellow('4. Ensure .htaccess overrides are allowed with: AllowOverride All')); console.log(chalk.default.red('\\nFor detailed deployment steps, refer to the official Apache documentation.')); })();"`,
                `node -e "(async () => { const chalk = await import('chalk'); console.log(chalk.default.magenta('\\n\\n\\n\\n© 2023 Nolly | Website: thenolle.com | Github: @TheNolle | Patreon: @_nolly\\n')); })();"`,
            ],
            blocking: true,
            parallel: false,
        },
    }),
]

export default {
    entry,
    module,
    resolve,
    output,
    devServer,
    plugins,
}
