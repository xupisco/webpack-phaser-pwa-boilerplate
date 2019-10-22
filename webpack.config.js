const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = env => {
    return {
        mode: 'development',
        entry: {
            app: './src/js/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src/js/'),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    include: path.resolve(__dirname, 'src/scss/'),
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ]
        },

        devServer: {
            contentBase: path.resolve(__dirname, 'build')
        },

        plugins: [
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, 'index.html'),
                    to: path.resolve(__dirname, 'build')
                },
                {
                    from: path.resolve(__dirname, 'assets', '**', '*'),
                    to: path.resolve(__dirname, 'build')
                }
            ]),
            new webpack.DefinePlugin({
                'typeof CANVAS_RENDERER': JSON.stringify(true),
                'typeof WEBGL_RENDERER': JSON.stringify(true),
                __ENV__: env
            }),
            new WorkboxPlugin.GenerateSW({
                clientsClaim: true,
                skipWaiting: true
            })
        ]
    }
};
