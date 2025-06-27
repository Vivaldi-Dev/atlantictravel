/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.panoramatours.co.mz'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.panoramatours.co.mz/api/:path*',
      },
    ];
  },
};

export default nextConfig;
