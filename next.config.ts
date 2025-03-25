import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint warnings in production
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore TypeScript errors in production
  },
  // Optionally, add any other Next.js config below
}

export default nextConfig;
