import React from "react";
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import style from "./about.module.css"
import "../../sass/mystyles.scss"

export default function About({data}) {
   return (
      <Layout>
         <SEO title="About" /> 
            <section className="section">
               <div className="container">
                  <h1 className="title is-size-2 is-size-3-touch">                                          
                     Nice to e-meet you, I'm Elliot Shimba. {`#:hi`}
                  </h1>
                  <div className="columns is-multiline">
                     <div className={`column is-two-thirds ${style.debugger}`}>
                        <h2 className="title is-size-3 is-size-4-touch has-text-less-intense">
                           A Toronto-based full-stack web developer `#:computer:`, <br />
                           strong advocate of diversity &amp; inclusion in tech community :rainbow:, <br />
                           avid sourdough-baker :bread:
                        </h2>
                     </div>
                     <div className={`column is-one-third ${style.debugger}`}>
                        <p className="image is-128x128">
                           Photo 1
                           <Img
                              fluid={data.file.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                        </p>
                     </div>   
                     <div className={`column is-two-thirds ${style.debugger}`}>
                        <h2 className="is-size-4 is-size-5-touch has-text-less-intense">
                           JavaScript is my favourite language and I strive to write clean, reusable code. <br />
                           I enjoy crafting beautiful full-stack applications with JavaScript and JS-fueled tools 
                           such as React.js, Node.js, TypeScript, Redux.js, Gatsby, PostgreSQL, MongoDB, and more.(I never stop learning!)
                        </h2>
                     </div>
                     <div className={`column is-one-third ${style.debugger}`}>
                        <p className="image is-128x128">
                           Photo 2
                           <Img
                              fluid={data.file.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                        </p>
                     </div>
                     <div className={`column is-two-thirds ${style.debugger}`}>
                        <h2 className="is-size-4 is-size-5-touch has-text-less-intense">
                           Besides web development, things I've been keen on are;
                           <h3 className="is-size-4 is-size-5-touch">
                              Operating systems, open-source projects(even better if supporting or mainly run by queer / people of colour), teaching kids how to code, 
                              anti-surveillance movement, net neutrality.<br /> 
                              Same? Great! Let's make it heppen together or let me join your project!
                           </h3>
                        </h2>
                     </div>
                     <div className={`column is-one-third ${style.debugger}`}>
                        <p className="image is-128x128">
                           Photo 3
                           <Img
                              fluid={data.file.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                        </p>
                     </div>
                     <div className={`column is-two-thirds ${style.debugger}`}>
                       <h2 className="is-size-4 is-size-5-touch has-text-less-intense">
                           To get in touch, you can
                           <a href="mailto:shimba@posteo.net"> email me </a>
                           or message me on
                           <span className={`icon is-large is-marginless`}>
                              <a href="https://www.linkedin.com/in/eshimba/">
                                 <FontAwesomeIcon icon={faLinkedin} className="fas fa-lg has-text-link" />
                              </a>
                           </span>
                        </h2>
                     </div>
                     <div className={`column is-one-third ${style.debugger}`}>
                        <p className="image is-128x128">
                           Photo 4
                           <Img
                              fluid={data.file.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                        </p>
                     </div>
                  </div>
               </div>
            </section>
      </Layout>
   )
}

export const query = graphql`
    query {
      file(relativePath: { eq: "images/profile_photo_1.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid (maxWidth: 1600){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `