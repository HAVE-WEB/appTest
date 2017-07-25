
module.exports = {
    entry:{
        bundle1: './main.js',
        bundle2:'./main1.js'
    },


    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: "style!css" },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/,    loader: "jsx-loader" }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    plugins: []
};
