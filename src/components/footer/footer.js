import React from "react"
import "../../../sass/mystyles.scss"
import './footer.css'

export default function Footer() {
   return (
      <footer className="footer footer-background">
         <div className="content has-text-centered">
            <p className="has-text-white  has-text-weight-semibold">
               ELLIOT SHIMBA &nbsp;&copy;&nbsp; 2020
            </p>
            <hr className="hr" /> 
            <a href="https://bulma.io">
               <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="160" height="30" />
            </a>
            {/* <a href="https://www.gatsbyjs.org">
               <img src="https://www.gatsbyjs.org/Gatsby-Monogram.svg" alt="gatsby logo" width="30" />
            </a> */}
         </div>
      </footer> 
   )
}
