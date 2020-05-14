import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../../sass/mystyles.scss"

export default function GrowthLog({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
        <section className="section">
          <div className="container">
            <article>
              <h1 className="title is-size-3-desktop is-size-4-touch">
                { post.frontmatter.title } 
              </h1>

              <div 
                className="is-size-5-desktop is-size-6-touch" 
                dangerouslySetInnerHTML={{ __html: post.html}} 
              />
            </article>
          </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
      markdownRemark(fields: { slug: {eq: $slug }}) {
        html
        frontmatter {
          title
        }
      }  
  }
`