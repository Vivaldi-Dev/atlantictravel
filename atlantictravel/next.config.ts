/** @type {import('next').NextConfig} */

const apiUrl = process.env.API_URL || 'http://127.0.0.1:4000/api';

const nextConfig = {
  images: {
    domains: ['api.panoramatours.co.mz', 'localhost', '127.0.0.1'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
