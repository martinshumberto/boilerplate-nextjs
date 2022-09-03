/* eslint-disable */
/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    config.module.rules.push({
      test: /\.(txt|png|svg|gif|bmp|jpg|jpe?g|ttf|.pdf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            context: '',
            outputPath: 'static',
            publicPath: '/_next/static',
            name: 'assets/[name].[hash:8].[ext]',
            limit: 1024 * 30, // 20kb
            esModule: false,
          },
        },
      ],
    })
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}

module.exports = nextConfig
