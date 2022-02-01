import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import "../../sass/mystyles.scss"
import style from "./growthLogResources/growthLog.module.css"

export default function PersonalGrowthLog({ data }) {
  return (
    <Layout>
      <SEO title="Personal Growth Log" />
      <section className={`hero is-primary ${style.marginBottom}`}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-3-desktop is-size-4-touch">
              Personal Growth Log
            </h1>
            <h2 className="subtitle">
              {/* { data.allMarkdownRemark.totalCount } posts */}0 post
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {/* {data.allMarkdownRemark.edges.map(({ node }) => 
              (
                <div key={node.id}>
                  <article>
                    <h1 className="title is-size-4-desktop is-size-5-touch">
                      <Link to={node.fields.slug}>  
                        {node.frontmatter.title}{" "}
                      </Link>
                    </h1>
                    <div className={style.excerpt}>
                      <p className="is-size-5-desktop is-size-6-touch">
                        {node.excerpt}
                      </p>
                    </div>
                    <p>{node.frontmatter.date} &nbsp; {node.timeToRead} mins read </p>
                    <hr className={style.hr} />
                  </article>
                </div>
              )
            )} */}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
