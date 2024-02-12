/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    //RazorPay keys
    RAZORPAY_KEY: process.env.RAZORPAY_KEY,
    RAZORPAY_SECRET: process.env.RAZORPAY_SECRET,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
