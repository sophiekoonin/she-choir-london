module.exports = {
  siteMetadata: {
    title: 'SHE Choir London'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `shechoir.com/london`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true
      }
    }
  ]
}
