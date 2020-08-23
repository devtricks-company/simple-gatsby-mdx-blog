const { graphql } = require("gatsby")




exports.createPages = async function({actions,graphql}){
    const {data} = await graphql`
          query{
            allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          slug
        }
        id
      }
    }
  }
          }

  `

  //Create pageinated

  const postPerPage = 3 ;

  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);
  Array.from({length: numPages}).forEach((_,i) => {
      actions.createPages({
          path : i === 0 ? '/' : `/${ i + 1 }`,
          component:require.resolve('./src/templates/allPosts.js'),
          context = {
              limit: postPerPage,
              skip : i * postPerPage,
              numPages,
              currentPage: i + 1,

          }
      })
  });

  // create single blog post
  data.allMdx.edges.forEach(edge => {
      const slug = edge.node.slug;
      const id = edge.node.id;
      actions.createPages({
          path:slug,
          component:require.resolve('./src/templates/singlePost.js'),
          context:{id}
      })
  })
}