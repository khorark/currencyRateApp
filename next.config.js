const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')

module.exports = withTypescript(
    withLess({
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]',
        },
    }),
)
