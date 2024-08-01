const HtmlWebpackPlugin = require("html-webpack-plugin")
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    mode: 'development',
    output: {
        filename: "[hash:5].[name].js"
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                use: ['vue-loader']
            },
            {
                test: / \.jsx?/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test: /\.css/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
