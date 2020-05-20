import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import style from './latestPosts.module.css'
import "../../../sass/mystyles.scss"

export default function LatestPosts() {
   const Article = (props) => 
       (
         <div className="column is-one-third" key={props.id}>
            <article className="media notification has-background-light">
               <div className="media-content">
                  <div className="content">
                     <Link to={props.to} className={`has-text-link ${style.titleNoDecoration}`}>
                        <h1 className={`title is-size-4 is-size-5-touch`}>{props.title} </h1>
                     </Link>
                        <p className="subtitle is-size-6 is-size-7-touch">
                           {props.date}
                        </p>
                        {/* <p className="subtitle is-size-5 is-size-6-touch">
                           {props.excerpt} 
                        </p> */}
                  </div>	
               </div>  
            </article>
         </div>   
      )

   const data = useStaticQuery(
      graphql` 
      query 
      {
         allMarkdownRemark(limit: 6, sort: { fields: [frontmatter___date], order: DESC }) {
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
         <section className={`section bottom-section ${style.marginTop}`} id="growthLog-technical">
            <div className="container">
               <h1 className={`title is-size-4-touch has-text-primary ${style.inline}`}>
                  Growth Log &nbsp;
               </h1>
               <Link to="/technicalGrowthLog/" className="subtitle is-size-5-touch has-text-link">
                  more posts >>>
               </Link>
               <div className="columns is-multiline">
                     {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Article 
                           id={node.id}
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