/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://github.com/elevenlabs/captions.events",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
