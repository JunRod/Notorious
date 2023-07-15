/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 3600,
  },
  async headers () {
    return [
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=0; includeSubDomains; preload'
      }
    ]
  }
}

module.exports = nextConfig
