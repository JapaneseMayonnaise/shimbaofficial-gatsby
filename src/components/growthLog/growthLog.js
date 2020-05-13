import React from "react"
import Layout from "../layout"
import "../../../sass/mystyles.scss"

export default function GrowthLog() {
   const Article = props => {
      return (
         <div class="column is-one-third">
            <article class="media notification has-background-light">
               <div class="media-content">
                  <div class="content">
                     <h1 class="title is-size-4 is-size-5-touch">{props.title}</h1>
                     <p class="subtitle is-size-5 has-text-link  is-size-6-touch">
                        <a href="./growth-log/technical/what-i-learned-from-making-my-web-app-democratic-carpool-karaoke.md"> Read more... </a>
                     </p>
                     <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>	
               </div>  
            </article>
         </div>   
      )
   }

   return (
         <section class="section bottom-section" id="growthLog-technical">
            <div class="container">
               <h1 class="title is-size-4-touch has-text-primary">Growth Log</h1>
               <div class="columns is-multiline">
                     <Article 
                           title='What do you mean my root file system is 97% full?!'
                        />
                     <Article 
                        title='Weekly notes 18-25 April 2020; Plymouth, apt, gedit, kernels'
                     />
                     <Article 
                        title='Suddenly my boot file system got 100% full and here is how I resolved'
                     />
                     <Article 
                        title='Pop!OS is full of bugs and issues and I love it'
                     />
                     <Article 
                        title='What I learned from making a website with Bulma CSS framework'
                     />

               </div>
            </div>
         </section>	
   ) 
}
