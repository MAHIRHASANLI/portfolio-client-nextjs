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
        }]
    }
};

export default nextConfig;
