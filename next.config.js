module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co']
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils'
      });
    }
    return config;
  }
};
