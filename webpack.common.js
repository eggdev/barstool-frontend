const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '.'),
    entry: {
        app: ['babel-polyfill', './client/App.jsx'],
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].bundle.[hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './client/dev.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, './client'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                ['es2015', { modules: false }],
                                'react',
                                'stage-2',
                            ],
                            env: {
                                production: {
                                    presets: ['minify'],
                                },
                            },
                            plugins: [
                                'syntax-dynamic-import',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
        ],
    },
    resolve: {
        alias: {
            Atoms: path.join(__dirname, './client/_atoms'),
            Molecules: path.join(__dirname, './client/_molecules'),
            Organisms: path.join(__dirname, './client/_organisms'),
            Utilities: path.join(__dirname, './client/utilities'),
            Templates: path.join(__dirname, './client/templates'),
        },
    },
};
