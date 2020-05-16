import React from "react"
import Navbar from "./Navbar"
import { useStaticQuery, graphql } from "gatsby"
import "../../../sass/mystyles.scss"
import './header.module.css'

export default function Header() {
   const data = useStaticQuery(
      graphql`
         query {  
            site {
               siteMetadata {
                  title
               }
            }
         }
      `   
   )

   return (
         <Navbar 
            title={data.site.siteMetadata.title}
         />
   )
}  