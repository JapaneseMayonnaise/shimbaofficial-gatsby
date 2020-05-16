import React from "react"
import Showcase from "../components/showcase/showcase"
import LatestPosts from "../components/latestPosts/latestPosts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "../../sass/mystyles.scss"


export default function Home({ data }) {
   return (
      <Layout>
         <SEO title="Home" />
         <Showcase />
         <LatestPosts />
      </Layout>
   ) 
}

export const query = graphql`
   query {
      site {
         siteMetadata {
            title
            author
         }
      }
   }
`