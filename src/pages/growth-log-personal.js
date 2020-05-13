import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Showcase from "../components/showcase/showcase"
import "../../sass/mystyles.scss"

export default function Home() {
   return (
      <div>
         <Header />
            <Showcase />
         <Footer />
      </div>
   ) 
}
