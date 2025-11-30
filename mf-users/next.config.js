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
          main: `main@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // "./AgUserTable": "./components/AgUserTable.tsx",
          "./ProductCard": "./components/ProductCard.js",
          "./catalog": "./components/Catalog.js",
          "./components": "./components/index.ts",
          // "./recent-activity": "./components/RecentActivity.tsx",
          // "./useDebounce": "./hooks/useDebounce.ts",
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
