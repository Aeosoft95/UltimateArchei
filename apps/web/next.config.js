/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const api = process.env.NEXT_PUBLIC_API_BASE_URL;
    return api ? [{ source: "/api/:path*", destination: `${api}/api/:path*` }] : [];
  },
};
export default nextConfig;
