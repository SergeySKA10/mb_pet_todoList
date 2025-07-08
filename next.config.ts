import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    sassOptions: {
        additionalData: `
      $main_color: #e5e5e3;
    `,
    },
};

export default nextConfig;
