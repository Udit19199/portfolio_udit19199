/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  pageExtensions: ['md', 'mdx', 'ts', 'tsx', 'js', 'jsx'],
  experimental: {
    mdxRs: true, // built-in Rust MDX compiler for Turbopack
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmos.so',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig

