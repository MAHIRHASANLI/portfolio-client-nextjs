/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com", search: "", }]
    },
    env: {
        BASE_URL: process.env.BASE_URL
    }
};

export default nextConfig;
