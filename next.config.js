// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const withTM = require('next-transpile-modules')([
    'three',
    'react-spring',
    '@react-spring/three',
    '@react-spring/web',
    '@react-three/fiber',
    '@react-three/postprocessing',
    '@react-three/drei',
])

const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            exclude: /node_modules/,
            use: ['file-loader'],
        })

        config.module.rules.push({
            test: /react-spring/,
            sideEffects: true,
        })

        return config
    },
}

module.exports = withPlugins([
    [optimizedImages, {
        /* config for next-optimized-images */
    }],
    [withTM],
    [withBundleAnalyzer],
    // your other plugins here

],nextConfig);
