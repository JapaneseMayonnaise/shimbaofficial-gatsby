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
                  <div className="columns is-multiline is-vcentered reverse-column-order">
                     {/* <div className={`column is-two-thirds is-offset-one-third ${style.debugger}`}>
                        <h1 className="title is-size-2 is-size-3-touch">                                          
                           Nice to e-meet you, I'm Elliot Shimba. 
                        </h1>
                     </div>    */}
                     <div className={`column is-one-third ${style.debugger}`}>
                           <Img
                              fluid={data.firstImage.childImageSharp.fluid}
                              alt="shimba's profile photo first of four."
                           />
                     </div>
                     <div className={`column is-two-thirds ${style.debugger}`}>
                        <h1 className={`title is-size-2 is-size-4-touch ${style.h1Margin}`}>                                          
                           Nice to e-meet you, I'm Elliot Shimba. 
                        </h1>
                        <h2 className={`title is-size-2 is-size-4-touch ${style.textVerticalSpacing}`}>
                           A Toronto-based full-stack web developer, <br />
                           strong advocate of diversity in tech community, <br />
                           avid sourdough-baker.
                        </h2>
                     </div>
                  </div>
                  <div className="columns is-multiline">   
                     <div className={`column is-one-third ${style.debugger}`}>
                           <Img
                              fluid={data.secondImage.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                     </div>
                     <div className={`column is-two-thirds ${style.debugger}`}>
                        <h2 className="is-size-4 is-size-5-touch">
                           I enjoy crafting beautiful applications, especially in a cohesive team, using JavaScript and JS-fueled/related tools 
                           such as React.js, Node.js, TypeScript, Redux.js, Gatsby, PostgreSQL, MongoDB, Jest, and more. 
                           <br />                           
                           <br />                           
                           As a trans person of colour, it is my important mission to be a safer person to work with and
                           create a safer workplace for the fellow queer/poc/people with disabilities.
                           Although things have improved for us these past several years like mentioned in
                           <a href="https://www.wired.com/2017/06/diversity-open-source-even-worse-tech-overall/"> here </a> 
                           and <a href="https://www.codethink.co.uk/articles/2019/acceptance-strife-and-progress-in-the-lgbtiq-and-open-source-communities/"> there</a>,
                           I believe tech and open source community can be even more inclusive and diversed with our continuous effort.
                        </h2>
                     </div>
                     <div className={`column is-one-third ${style.debugger}`}>
                           <Img
                              fluid={data.thirdImage.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                     </div>
                     <div className={`column is-two-thirds ${style.debugger}`}>
                        <h2 className="is-size-4 is-size-5-touch">
                           Besides things mentioned above, I am also keen on<br />
                        </h2>
                        <p className="is-size-4 is-size-5-touch">
                           <ul className={`${style.disc}`}>
                              <li>Linux based operating systems</li>
                              <li>Teaching how to code, especially socially & culturally marginalized folks</li>
                              <li>FOSS projects</li>
                              <li>Online privacy</li>
                              <li>Net neutrality</li>
                              <li>Blockchain</li>
                           </ul>
                        </p>
                     </div>
                     <div className={`column is-one-third ${style.debugger}`}>
                           <Img
                              fluid={data.fourthImage.childImageSharp.fluid}
                              alt="shimba's profile photo first of four"
                           />
                           <small>Photo credit <a href="https://www.roxi.design/">Roxanne Nicolussi</a></small>
                     </div>
                     <div className={`column is-two-thirds ${style.debugger}`}>
                       <h2 className="is-size-4 is-size-5-touch">
                           Oh, you same? Excellent! Let's make it heppen together or let me contribute to your project. <br />
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
      secondImage: file(relativePath: { eq: "images/profile_photo_lookingRight.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 800){
             ...GatsbyImageSharpFluid
           }
         }
       },
       thirdImage: file(relativePath: { eq: "images/profile_photo_lookingLeft.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 800){
             ...GatsbyImageSharpFluid
           }
         }
       },
       fourthImage: file(relativePath: { eq: "images/profile_photo_standing.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 800){
             ...GatsbyImageSharpFluid
           }
         }
       }
    }
  `