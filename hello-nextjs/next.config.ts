import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable production optimizations
  poweredByHeader: false,

  // Configure images for Supabase Storage
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/storage/v1/**',
      },
    ],
    // Add support for external image domains if needed
    domains: process.env.IMAGE_DOMAINS?.split(',') || [],
  },

  // Environment-specific configurations
  ...(process.env.NODE_ENV === 'production' && {
    // Production-only settings
    compress: true,
    // Enable analytics if needed
    // analyticsId: process.env.VERCEL_ANALYTICS_ID,
  }),

  // API rewrites for Supabase if using custom domain
  async rewrites() {
    return [
      {
        source: '/api/supabase/:path*',
        destination: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/:path*`,
      },
    ];
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
