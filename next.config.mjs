/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.pixabay.com",
        },
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
        {
          protocol: "https",
          hostname: "static.wixstatic.com",
        },
      ],
    },
    output: 'export',         // ⬅️ abilita l'export statico
    assetPrefix: './',        // ⬅️ per generare percorsi relativi nei file
    trailingSlash: true       // ⬅️ per usare about/index.html invece di about.html
  };
  
  export default nextConfig;