module.exports = {
    basePath: '/next-quiz',
    assetPrefix: '/next-quiz/',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        return config
    },
}