import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from "../../components/seo"
import './growthLog.css' 

export default function PersonalGrowthLog ({data}) {
   console.log(data);

   return (
      <Layout>
        <SEO title="Personal Growth Log" />
        <section class="hero is-primary margin-bottom">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-3-desktop is-size-4-touch">
                Personal Growth Log
              </h1>
              <h2 class="subtitle">
              { data.allMarkdownRemark.totalCount } posts
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {/* <h1 class="title">
              Personal Growth Log
            </h1> */}
            {/* <h4 class="subTitle">{ data.allMarkdownRemark.totalCount } posts</h4>            */}
            {data.allMarkdownRemark.edges.map(({ node }) => 
              (
                <div key={node.id}>
                  <h1 className="title is-size-4-desktop is-size-5-touch">
                    <Link to={node.fields.slug}>  
                      {node.frontmatter.title}{" "}
                    </Link>
                  </h1>
                  <div id="excerpt">
                    <p className="is-size-5-desktop is-size-6-touch">
                      {node.excerpt}
                    </p>
                  </div>
                  <p>{node.frontmatter.date} &nbsp; {node.timeToRead} mins read </p>
                  <hr className="hr" />
                </div>
              )
            )}
          </div>
        </section>
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
        fields {
          slug
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