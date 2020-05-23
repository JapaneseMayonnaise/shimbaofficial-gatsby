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

   const Image = (props) => (
      <div className={`column is-one-third ${style.debugger}`}>
         <Img
            fluid={props.fluid}
            alt={props.alt}
         />
         {props.children}
      </div>
   )

   const Description = (props) => (
      <div className={`column is-two-thirds ${style.debugger}`}>
         {props.children}
      </div>
   )

   return (
      <Layout>
         <SEO title="About" /> 
            <section className="section">
               <div className="container">
                  {/* top column */}
                  <div className="columns is-multiline is-vcentered reverse-column-order">
                     <Image 
                        fluid={data.firstImage.childImageSharp.fluid}
                        alt="shimba is smiling, looking straight"
                     />
                     <Description>
                        <h1 className={`title is-size-2 is-size-4-touch ${style.h1Margin}`}>                                          
                           Nice to e-meet you, I'm Elliot Shimba. 
                        </h1>
                        <h2 className={`title is-size-2 is-size-4-touch ${style.textVerticalSpacing}`}>
                           I'm a Toronto-based full-stack web developer, <br />
                           a strong advocate of diversity in tech community, <br />
                           and an avid sourdough-baker.
                        </h2>
                     </Description>
                  </div>
                  {/* top column */}
                  {/* the 3 lower columns */}
                  <div className="columns is-multiline">   
                     <Image 
                        fluid={data.secondImage.childImageSharp.fluid}
                        alt="shimba is smiling, looking to the right"
                     />
                     <Description>
                        <h2 className="is-size-4 is-size-5-touch">
                           I enjoy crafting beautiful applications, especially in a cohesive team, using JavaScript and JS-fueled/related tools 
                           such as React.js, Node.js, TypeScript, Redux.js, Gatsby, PostgreSQL, MongoDB, Jest, Git and more. 
                           <br />                           
                           <br />                           
                           As a trans person of colour, I consciously strive to be a safer person to work with and
                           create a safer workplace for the fellow queer/poc/people with disabilities.
                           Although things have improved for us these past several years as mentioned in
                           <a href="https://www.wired.com/2017/06/diversity-open-source-even-worse-tech-overall/"> here </a> 
                           and <a href="https://www.codethink.co.uk/articles/2019/acceptance-strife-and-progress-in-the-lgbtiq-and-open-source-communities/"> here</a>,
                           I believe the tech and open source community can be even more inclusive and diversed with our continuous effort.
                        </h2>
                     </Description>
                     <Image
                        fluid={data.thirdImage.childImageSharp.fluid}
                        alt="shimba's profile photo first of four"
                     />
                     <Description>
                        <h2 className="is-size-4 is-size-5-touch">
                           Besides the things mentioned above, I am also keen on<br />
                        </h2>
                        <p className="is-size-4 is-size-5-touch">
                           <ul className={`${style.disc}`}>
                              <li>Operating systems</li>
                              <li>Blockchain</li>
                              <li>FOSS</li>
                              <li>Hackathons & GameJams</li>
                              <li>Teaching how to code, especially socially & culturally marginalized folks</li>
                              <li>Online privacy</li>
                              <li>Net neutrality</li>
                              <li>Technical document translation (English - Japanese)</li>
                           </ul>
                        </p>
                     </Description>
                     <Image
                        fluid={data.fourthImage.childImageSharp.fluid}
                        alt="shimba's profile photo first of four"
                     >
                        <small>Photo credit <a href="https://www.roxi.design/">Roxanne Nicolussi</a></small>
                     </Image>
                     <Description>
                       <h2 className="is-size-4 is-size-5-touch">
                           Oh, you too? Excellent! Let's make it happen together or let me contribute to your project. <br />
                           To get in touch, you can
                           <a href="mailto:shimba@posteo.net"> email me </a>
                           or message me on
                           <span className={`icon is-large is-marginless`}>
                              <a href="https://www.linkedin.com/in/eshimba/">
                                 <FontAwesomeIcon icon={faLinkedin} className="fas fa-lg has-text-link" />
                              </a>
                           </span>
                        </h2>
                     </Description>
                  </div>
                  {/* lower columns */}
               </div>
            </section>
      </Layout>
   )
}

export const query = graphql`
    query {
      firstImage: file(relativePath: { eq: "images/profile_photo_lookingStraight.jpg" }) {
        childImageSharp {
          fluid (maxWidth: 1600){
            ...GatsbyImageSharpFluid
          }
        }
      },
      secondImage: file(relativePath: { eq: "images/profile_photo_lookingRight.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 1600){
             ...GatsbyImageSharpFluid
           }
         }
       },
       thirdImage: file(relativePath: { eq: "images/profile_photo_lookingLeft.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 1600){
             ...GatsbyImageSharpFluid
           }
         }
       },
       fourthImage: file(relativePath: { eq: "images/profile_photo_standing.jpg" }) {
         childImageSharp {
           fluid (maxWidth: 1600){
             ...GatsbyImageSharpFluid
           }
         }
       }
    }
  `