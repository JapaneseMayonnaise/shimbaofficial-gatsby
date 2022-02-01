import React from "react"
import Showcase from "../components/showcase/showcase"
import LatestPosts from "../components/latestPosts/latestPosts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../../sass/mystyles.scss"

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Showcase />
    </Layout>
  )
}
