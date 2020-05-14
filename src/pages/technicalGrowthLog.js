import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function TechnicalGrowthLog ({data}) {
   console.log(data);

   return (
      <Layout>
        <h1>
          Technical growth ~one step at a time ~
        </h1>
         <div>
            <h4>{ data.allMarkdownRemark.totalCount } posts</h4>           
         </div> 
         {data.allMarkdownRemark.edges.map(({ node }) => 
          (
            <div key={node.id}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt} </p>
              <p>{node.timeToRead} mins read </p>
              <hr />
            </div>
          )
         )}
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          date
          title
        }
        excerpt
        timeToRead
        html
      }
    }
    totalCount
  }
}
`