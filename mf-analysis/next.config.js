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
          //main: `main@https://admin-dashboard-3vo8.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./data": "./data/users.ts",
          "./StatusChart": "./components/StatusChart.tsx",
          "./SummaryCards": "./components/SummaryCards.tsx",
          "./components": "./components/index.tsx",
          "./dashboard": "./pages/dashboard.tsx",
          // "./hooks": "./hooks/index.ts",
          "./useCountUp": "./hooks/useCountUp.ts",
          "./analysis": "./pages/analysis.tsx",
        },
        extraOptions: {
          exposePages: false,
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
