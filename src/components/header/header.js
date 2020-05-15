import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faMediumM } from "@fortawesome/free-brands-svg-icons"
import { faDev } from "@fortawesome/free-brands-svg-icons"
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import "../../../sass/mystyles.scss"
import './header.css'

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

   const Icon = (props) => (
      <span className="icon is-large navbar-icons">
         <a href={props.href}>
            <FontAwesomeIcon icon={props.iconName} className="fab fa-2x has-text-link"/>
         </a>
      </span>
   )

   return (
         <nav className="navbar is-spaced is-fixed-top same-layer is-transparent" role="navigation" aria-label="main navigation">
             <div className="navbar-brand">
               <Link to="/" className="navbar-item">
                  <h1 className="has-text-weight-bold is-size-3 has-text-primary brand-name">
                     {data.site.siteMetadata.title}
                  </h1>
               </Link>
   
               <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar_menu">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
               </a>
            </div>  
            <div id="navbar_menu" className="navbar-menu">
               <div className="navbar-start">
                  <Link to="/about/" className="navbar-item"> 
                     About 
                  </Link>
                  <div className="navbar-item has-dropdown is-hoverable">
                     <a className="navbar-link">   
                        Growth Log
                     </a>
                     <div className="navbar-dropdown is-boxed">
                        <Link to="/technicalGrowthLog/" className="navbar-item"> 
                           Technical &nbsp;&gt;&nbsp;&nbsp; Programming &nbsp;&amp;&nbsp; Operating Systems 
                        </Link>               
                        <Link to="/personalGrowthLog/" className="navbar-item"> 
                           Personal &nbsp;&nbsp;&gt;&nbsp;&nbsp; Everything Else 
                        </Link>
                     </div>
                  </div>
               </div>
            
               <div className="navbar-end">
                  <div className="navbar-item">
                     <Icon
                        href="https://github.com/DrCardamom"
                        iconName={faGithub}
                     />                     
                     <Icon
                        href="https://www.linkedin.com/in/eshimba/"
                        iconName={faLinkedinIn}
                     />
                     <Icon
                        href="https://medium.com/@elliotshimba"
                        iconName={faMediumM}
                     />
                     <Icon
                        href="https://dev.to/drcardamom"
                        iconName={faDev}
                     />
                     <Icon
                        href="https://stackoverflow.com/users/11227880/shimba?tab=profile"
                        iconName={faStackOverflow}
                     />
                  </div>
               </div>
            </div>
         </nav>  
   )
}  