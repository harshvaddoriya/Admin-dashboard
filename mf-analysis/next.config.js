const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'analysis',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // './catalog': "./components/Catalog.js"
          "./components": "./components/index.js"
        },
        extraOptions: {
          exposePages: true
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
