/** @type {import('next').NextConfig} */
const nextConfig = {

    typescript: {
        
        ignoreBuildErrors: true,
      },
      webpack: config => {
        config.externals.push('pino-pretty', 'lokijs', 'encoding')
        return config
      }
}

module.exports = nextConfig
