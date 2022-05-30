const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      @import "./includes/variables";
      @import "./includes/mixins";
    `,
  },
}

module.exports = nextConfig
