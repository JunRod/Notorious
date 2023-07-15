/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        minimumCacheTTL: 3600,
    },
    http: {
        server: {
            http: true,
        },
    },
}

module.exports = nextConfig
