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
        name: 'shop',
        remotes: {
          //main: `main@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          main: `main@https://admin-dashboard-3vo8.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          // analysis: `analysis@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./tabledata": "./pages/tabledata.tsx",
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  }
}

module.exports = nextConfig
