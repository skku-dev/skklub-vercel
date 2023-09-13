/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"],
  },
  webpack: (config) => {
    // Add a rule to handle MP4 files
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    });

    // Return the modified config
    return config;
  },
};

module.exports = nextConfig;
