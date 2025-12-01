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
        remotes: {
          main: `main@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./StatusChart": "./components/StatusChart.tsx",
          "./SummaryCards": "./components/SummaryCards.tsx",
          "./components": "./components/index.tsx",
          "./dashboard": "./pages/dashboard.tsx",
          // "./hooks": "./hooks/index.ts",
          "./useCountUp": "./hooks/useCountUp.ts",
          "./analysis": "./pages/analysis.tsx",
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
