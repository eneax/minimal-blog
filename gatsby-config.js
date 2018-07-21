module.exports = {
  siteMetadata: {
    title: 'Minimal Blog',
    desc: 'Clean and minimal blog built with Gatsby.js',
  },
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
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ]
};
