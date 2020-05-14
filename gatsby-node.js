const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// create a slug for each pages
exports.onCreateNode = ({ node, getNode, actions }) => {
   const { createNodeField } = actions
   if(node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath:`pages/posts`})
      createNodeField({
         node,
         name:`slug`,
         value: slug
      })
   }
}

// create a page that shows a md file using a slug
exports.createPages = async({ graphql, actions }) => {
   const { createPage } = actions 
   const result = await graphql(`
      query {
         allMarkdownRemark {
            edges {
               node {
                  fields {
                     slug
                  }
               }
            }
         }
      } 
   `)
   
   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
         path: node.fields.slug,
         component: path.resolve(`./src/templates/growth-log.js`),
         // you can use data passed to context in page query 
         // as graphql variables like $slug like I did in growth-log.js
         context: {
            slug: node.fields.slug,
         }
      })
   })
}