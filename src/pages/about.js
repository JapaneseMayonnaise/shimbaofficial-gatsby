import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
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
                        <h2 className="title is-size-3 is-size-4-touch">
                           A Toronto-based full-stack web developer `#:computer:`, <br />
                           strong advocate of diversity &amp; inclusion in tech community :rainbow:, <br />
                           avid sourdough-baker :bread:
                        </h2>
                     </div>
                     <div className={`column is-one-third ${style.debugger}`}>
                           <Img
                              fluid={data.firstImage.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                     </div>   
                     <div className={`column is-two-thirds ${style.debugger}`}>
                        <h2 className="is-size-4 is-size-5-toeuch">
                           JavaScript is my favourite language and I strive to write clean, reusable code. <br />
                           I enjoy crafting beautiful full-stack applications with JavaScript and JS-fueled / related tools 
                           such as React.js, Node.js, TypeScript, Redux.js, Gatsby, PostgreSQL, MongoDB, Jest, Git and more.(I never stop learning!)
                        </h2>
                     </div>
                     <div className={`column is-one-third ${style.debugger}`}>
                           <Img
                              fluid={data.secondImage.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                     </div>
                     <div className={`column is-two-thirds ${style.debugger}`}>
                        <h2 className="is-size-4 is-size-5-touch">
                           Besides web development, things I've been keen on include
                        </h2>
                           <h3 className="is-size-4 is-size-5-touch">
                              Operating systems, open-source projects(even better if supporting or mainly run by queer / people of colour), teaching kids how to code, 
                              anti-surveillance, online privacy, net neutrality.<br /> 
                           </h3>
                     </div>
                     <div className={`column is-one-third ${style.debugger}`}>
                           <Img
                              fluid={data.thirdImage.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                              />
                     </div>
                     <div className={`column is-two-thirds ${style.debugger}`}>
                       <h2 className="is-size-4 is-size-5-touch">
                           Oh, you same? Excellent! Let's make it heppen together or let me contribute to your project!
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
                           <Img
                              fluid={data.fourthImage.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                     </div>
                  </div>
               </div>
            </section>
      </Layout>
   )
}

export const query = graphql`
    query {
      firstImage: file(relativePath: { eq: "images/profile_photo_lookingStraight.jpg" }) {
        childImageSharp {
          fluid (maxWidth: 800){
            ...GatsbyImageSharpFluid
          }
        }
      },
      secondImage: file(relativePath: { eq: "images/profile_photo_lookingLeft.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 800){
             ...GatsbyImageSharpFluid
           }
         }
       },
       thirdImage: file(relativePath: { eq: "images/profile_photo_lookingRight.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 800){
             ...GatsbyImageSharpFluid
           }
         }
       },
       fourthImage: file(relativePath: { eq: "images/profile_photo_lookingStraight.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 800){
             ...GatsbyImageSharpFluid
           }
         }
       }
    }
  `