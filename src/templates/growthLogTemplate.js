import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../../sass/mystyles.scss"
import style from "./growthLogTemplate.module.css"

export default function GrowthLog({ data }) {

  const post = data.markdownRemark
  
  return (
    <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <section className="section">
          <div className="container">
            <article>
              <h1 className="title is-size-3-desktop is-size-4-touch">
                {post.frontmatter.title} 
              </h1>
              <h2 className="subtitle is-size-5-desktop is-size-6-touch">
                {post.frontmatter.date} &nbsp; {post.timeToRead} min read
              </h2>
              <span className="is-size-5-desktop is-size-6-touch">
                <div 
                  dangerouslySetInnerHTML={{__html: post.html}} 
                />
              </span>
              <hr />
              <div>
                <p className="is-size-5-desktop is-size-6-touch">
                  Typos/comments/suggestions are welcomed on <a href="https://github.com/DrCardamom/shimbaofficial-gatsby/issues">GitHub issues</a>
                </p>
                <Link to="/technicalGrowthLog/">
                  <button className={`button is-link is-outlined ${style.button}`}>
                    Go back to the list of Growth Log
                  </button>
                </Link>
              </div>
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
          date
          title
        }
        timeToRead
      }  
  }
`