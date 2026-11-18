/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{source:'/:path*',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'Referrer-Policy',value:'no-referrer'},{key:'X-Frame-Options',value:'SAMEORIGIN'},{key:'Strict-Transport-Security',value:'max-age=63072000'}]}]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
