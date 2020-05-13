import React from "react"
import Showcase from "../components/showcase/showcase"
import GrowthLog from "../components/growthLog/growthLog"
import Layout from "../components/layout"
import "../../sass/mystyles.scss"


export default function Home() {
   return (
      <Layout>
         <Showcase />
         <GrowthLog />
      </Layout>
   ) 
}
