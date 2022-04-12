import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import style from "./index.module.css"
import "../../sass/mystyles.scss"

export default function Home({ data }) {
  const Image = props => (
    <div className={`column is-one-third ${style.debugger}`}>
      <Img fluid={props.fluid} alt={props.alt} />
      {props.children}
    </div>
  )

  const Description = props => (
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
              <h1
                className={`title is-size-2 is-size-4-touch ${style.h1Margin}`}
              >
                Nice to e-meet you, I'm Elliot Shimba 👋🏻
              </h1>
              <h2
                className={`title is-size-2 is-size-4-touch ${style.textVerticalSpacing}`}
              >
                I'm a Berlin-based frontend engineer, <br />
                a strong advocate of diversity in tech community, <br />
                and an avid sourdough-baker.
              </h2>
            </Description>
          </div>
          {/* top column */}
          {/* the 2 lower columns */}
          <div className="columns is-multiline is-vcentered">
            <Image
              fluid={data.secondImage.childImageSharp.fluid}
              alt="shimba is smiling, looking to the right"
            />
            <Description>
              <h2 className="is-size-4 is-size-5-touch">
                I enjoy working with web applications using the latest tech
                stack in a remote and cohesive team. My current focus is
                frontend - although there was a time where I was writing backend
                appplications in Golang as well and I liked it.
                <br />
                I'm currently a part of
                <a href="https://400f.jp/"> 400 franc</a>, a fully-remote
                startup of 15ish wonderfully funny and talented people.
                <br />
                <br />
                As a trans person of colour, I consciously strive to be a safe
                person to work with and create a safer workplace for fellow
                queers/bipocs/people with disabilities 🏳️‍⚧️🏳️‍🌈
              </h2>
            </Description>
            <Image
              fluid={data.thirdImage.childImageSharp.fluid}
              alt="shimba's profile photo first of four"
            >
              <small>
                Photo credit{" "}
                <a href="https://www.roxi.design/">Roxanne Nicolussi</a>
              </small>
            </Image>
            <Description>
              <h2 className={`is-size-4 is-size-5-touch`}>
                My tech stack includes
              </h2>
              <div>
                <ul className={`is-size-4 is-size-5-touch ${style.disc}`}>
                  <li>TypeScript</li>
                  <li>HTML, CSS(SCSS), JavaScript</li>
                  <li>Vue.js, Vuex</li>
                  <li>React.js, Redux</li>
                  <li>GraphQL, RESTful API</li>
                  <li>Testing - Jest, Cypress</li>
                </ul>
              </div>
              <h2 className={`is-size-4 is-size-5-touch ${style.contact}`}>
                To get in touch, you can
                <a href="mailto:shimba@posteo.net"> email me </a>
                or message me on
                <span className={`icon is-large is-marginless`}>
                  <a href="https://www.linkedin.com/in/eshimba/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fas fa-lg has-text-link"
                    />
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
    firstImage: file(
      relativePath: { eq: "images/profile_photo_lookingStraight.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondImage: file(
      relativePath: { eq: "images/profile_photo_lookingRight.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdImage: file(
      relativePath: { eq: "images/profile_photo_lookingLeft.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
