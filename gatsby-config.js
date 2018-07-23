module.exports = {
  siteMetadata: {
    title: 'Minimal Blog',
    desc: 'Clean and minimal blog built with Gatsby.js',
  },
  pathPrefix: "/minimal-blog",
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '711rrtyeakht',
        accessToken: '1e831909989ce0446563068ed614742f9db396857d7ccbd1597e02f39282207d'
      }
    },
  ]
};
