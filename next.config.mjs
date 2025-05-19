/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'placehold.co',
            port: ""
          },
           {
        protocol: 'https',
        hostname: 'backendlampstore-production.up.railway.app',
        port: ""
      },
       {
        protocol: 'https',
        hostname: 'frontendlampstore-production.up.railway.app',
        port: ""
      }
        ],
            formats: ['image/webp', 'image/png', 'image/jpeg', 'image/jpg'],
      },
};

export default nextConfig;
