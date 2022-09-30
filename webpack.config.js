// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const config = {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve(__dirname, '/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        open: false, // true
        host: 'localhost',
        historyApiFallback: true,
        proxy: {
            '/webhook2': 'https://tmoncorp.webhook.office.com'
            // {
            //     target: 'https://tmoncorp.webhook.office.com/webhook2',
            //     changeOrigin: true,
            //     secure: false,
            // },
        },
        // devMiddleware: {
        //     index: false, // specify to enable root proxying
        // },
        // proxy: {
        //     context: () => true,
        //     '/webhook2': {
        //         target: 'https://tmoncorp.webhook.office.com/webhook2',
        //         changeOrigin: true,
        //         secure: false,
        //     }
        // },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            { 
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

module.exports = () => {
if (isProduction) {
    config.mode = 'production';
    
    
} else {
    config.mode = 'development';
}
return config;
};
