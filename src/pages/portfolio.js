import React from "react"
import Showcase from "../components/showcase/showcase"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../../sass/mystyles.scss"
import style from "./portfolio.module.css"

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Showcase />
    </Layout>
  )
}
