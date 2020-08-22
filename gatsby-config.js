/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:"pages",
        path:`${__dirname}/pages`
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:"posts",
        path:`${__dirname}/posts`
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:"images",
        path:`${__dirname}/images`
      }
    }
  ],
}
