import React from "react"
import Showcase from "../components/showcase/showcase"
import LatestPosts from "../components/latestPosts/latestPosts"
import Layout from "../components/layout"
import "../../sass/mystyles.scss"


export default function Home() {
   return (
      <Layout>
         <Showcase />
         <LatestPosts />
      </Layout>
   ) 
}
