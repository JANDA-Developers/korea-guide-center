const webpack = require("webpack");
module.exports = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack5: true,
    i18n: {
        locales: ["en", "ko", "ja", "chi"],
        defaultLocale: "ko",
    },
    images: {
        domains: [
            "k.kakaocdn.net",
            "s3.ap-northeast-2.amazonaws.com",
            "itsguide-storage.s3.ap-northeast-2.amazonaws.com",
            "korea-guide-bucket.s3.ap-northeast-2.amazonaws.com",
        ],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            })
        );
        config.resolve.fallback = { fs: false };
        return config;
    },
    async rewrites() {
        return [
            {
                source: "/robots.txt",
                destination: "/api/robots",
            },
        ];
    },
    async headers() {
        return [
            // {
            //   source: '/(.*)',
            //   headers: [
            //     {
            //       key: "Cross-Origin-Embedder-Policy",
            //       value: "require-corp",
            //     },
            //     {
            //       key: "Cross-Origin-Opener-Policy",
            //       value: "same-origin",
            //     },
            //   ],
            // },
        ];
    },
};
