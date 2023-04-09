/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  headers: () => {
    return [
      {
        source:  '/fonts/:font*',
        headers: [
          {
            key:  'Cache-Control',
            value:  'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig
