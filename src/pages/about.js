import React from "react";
import SEO from "../components/seo"
import Layout from "../components/layout"
import "../../sass/mystyles.scss"

export default function About() {
   return (
      <Layout>
         <SEO title="About" />
            <section className="section">
               <main className="container">
                  <h1>Hi, I'm Elliot Shimba</h1>
                  
               </main>
            </section>
      </Layout>
   )
}