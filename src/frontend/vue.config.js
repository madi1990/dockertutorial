module.exports = {
    devServer: {
        disableHostCheck: true,
        sockHost: 'frontend.madi.test',
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000,
        }
    },
};