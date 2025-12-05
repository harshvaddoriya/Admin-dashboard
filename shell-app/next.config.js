const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    // config.experiments = { topLevelAwait: true };
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      layers: true
    };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main',
        remotes: {
          //shop: `shop@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          //analysis: `analysis@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,

          shop: `shop@https://admin-dashboard-cs8i.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          analysis: `analysis@https://admin-dashboard-three-delta-76.vercel.app/_next/static/chunks/remoteEntry.js`,

        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // expose app
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
