import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    sassOptions: {
        additionalData: `
          $main_color: #e6e8e7;
          $text_color: #3b3636;
    `,
    },
};

export default nextConfig;
