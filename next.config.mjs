/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "picsum.photos",
            pathname: "/400/200",
            // port: "443",
            search: "",
        }, { protocol: "https", hostname: "res.cloudinary.com" }, { protocol: "https", hostname: "cdn-icons-png.flaticon.com'" }]
    },
    env: {
        BASE_URL: process.env.BASE_URL
    }
};

export default nextConfig;
