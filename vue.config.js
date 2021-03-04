const path = require('path')
const resolve = function (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    productionSourceMap: false,
    chainWebpack: config => {
        config.module
        .rule('js')
        .include.add(resolve('packages'))
        .end()
        .use('babel')
        .loader('babel-loader')
        .tap(options => {
            return options
        })
    }
}