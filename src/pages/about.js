import React from "react";
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../../sass/mystyles.scss"

export default function About({data}) {
   return (
      <Layout>
         <SEO title="About" />
         <h1>About me</h1>
         {/* <h1>{ data.site.siteMetadata.title}</h1> */}
      </Layout>
   )
}

export const query = graphql`
   query {
      site {
         siteMetadata {
            title
         }
      }
   }
`