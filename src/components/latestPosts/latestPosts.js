import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../../../sass/mystyles.scss"

export default function LatestPosts() {
   const Article = (props) => {
      return (
         <div class="column is-one-third" key={props.key}>
            <article class="media notification has-background-light">
               <div class="media-content">
                  <div class="content">
                     <Link to={props.to} class="has-text-link">
                        <h1 class="title is-size-4 is-size-5-touch">{props.title}</h1>
                     </Link>
                        <p class="subtitle is-size-6 is-size-7-touch">
                           {props.date}
                        </p>
                        <p class="subtitle is-size-5 is-size-6-touch">
                           {props.excerpt} 
                        </p>
                  </div>	
               </div>  
            </article>
         </div>   
      )
   }

   const data = useStaticQuery(
      graphql` 
      query 
      {
         allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
            node {
               id
               frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
               }
               fields {
                  slug
               }
               excerpt
            }
            }
         }
      }
      `
   )

   return (
         <section class="section bottom-section" id="growthLog-technical">
            <div class="container">
               <h1 class="title is-size-4-touch has-text-primary">
                  Growth Log : {data.allMarkdownRemark.totalCount} posts
               </h1>
               <div class="columns is-multiline">
                     {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Article 
                           key={node.id}
                           title={node.frontmatter.title}
                           excerpt={node.excerpt}
                           to={node.fields.slug}
                           date={node.frontmatter.date}
                         />
                     ))}
               </div>
            </div>
         </section>	
   ) 
}