module.exports = {
    basePath: '/next-quiz',
    assetPrefix: '/next-quiz/',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
              test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
          });
        // Important: return the modified config
        return config
    },
}