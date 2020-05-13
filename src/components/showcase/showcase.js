import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { faServer } from "@fortawesome/free-brands-svg-icons"
import { faNodejs } from "@fortawesome/free-brands-svg-icons"
import { faPlayCircle } from "@fortawesome/free-brands-svg-icons"
import "../../../sass/mystyles.scss"
import './showcase.css'

export default function Showcase () {
   return (
      <section className="section top-section is-paddingless same-layer" id="portfolio">
         <div className="container">
         <div className="columns ">
         {/* Democratic Carpool Karaoke */}
         <div className="column ">
            <div className="card">
               <div className="card-image">
               <figure className="image is-4by3">
                     <a href="https://democratic-carpool-karaoke.herokuapp.com/">
                     <img src='https://thumbs.gfycat.com/RaggedSadCarp-size_restricted.gif' alt="democratickarpoolkaraoke demo" />
                     </a>
               </figure>
               </div>
               <div className="card-content">
               <h1 className="title is-4 app-demo-title">
                  Democratic Carpool Karaoke
                  <span className="icon">
                     <a href="https://democratic-carpool-karaoke.herokuapp.com/">
                        <FontAwesomeIcon icon={faPlayCircle} className="fab has-text-link"/>
                     </a>
                  </span>
                  <span className="icon">
                     <a href="https://github.com/DrCardamom/democratic-carpool-karaoke">
                       <FontAwesomeIcon icon={faGithub} className="fab has-text-link"/>
                     </a>
                  </span>
               </h1>
               <div className="tags  is-marginless">
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faReact} className="fab has-text-link"/>
                        &nbsp; React.js
                  </span>
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faNodejs} className="fab has-text-link"/>
                        &nbsp; Node.js
                  </span>
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faServer} className="fab has-text-link"/>
                        &nbsp; Heroku
                  </span>
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faSpotify} className="fab has-text-link"/>
                        &nbsp; Spotify API
                  </span>
               </div>
               <div className="content">
                  <p>
                     Going on a drive with your grandparents? Don't know what to listen to?
                     This web app generates a Spotify playlist for you that consists of 50 popular songs of your generation and another 50 of your carpool-buddies' generation, all evenly mixed.
                     Give it a try!
                  </p>
                  <p>
                     Also read &nbsp; <a className="has-text-link"><i className="fas fa-bookmark"></i>&nbsp;Lessons learned from making web app "Democratic Carpool Karaoke"</a>
                  </p>
               </div>
               </div>
            </div>				
         </div>
         {/* Democratic Carpool Karaoke */}
         {/* RoboRedux */}
         <div className="column">
            <div className="card">
               <div className="card-image">
               <figure className="image is-4by3">
                  <a href="https://drcardamom.github.io/RoboRedux/">
                     <img src="https://thumbs.gfycat.com/ClassicJaggedAngelfish-size_restricted.gif" alt="RoboRedux demo" />
                  </a>
               </figure>
               </div>
               <div className="card-content">  
               <h1 className="title is-4 app-demo-title">
                  RoboRedux
                  <span className="icon">
                     <a href="https://drcardamom.github.io/RoboRedux/">
                     <i className="far fa-play-circle"></i>                  
                     </a>
                  </span> 
                  <span className="icon">
                     <a href="https://github.com/DrCardamom/RoboRedux">
                     <i className="fab fa-github has-text-link"></i>
                     </a>
                  </span> 
               </h1>
               <div className="tags  is-marginless">
                  <span className="tag is-primary is-light"><i className="fab fa-react"></i> &nbsp; React.js</span>
                  <span className="tag is-primary is-light"><i className="fab fa-react"></i> &nbsp; Redux.js</span>
               </div>
               <div className="content">
                  <p>
                     Mini robo search engine powered by React.js and Redux.js. Logs changes of the state using Redux-logger and handle API call with Redux-thunk.
                  </p>
                  <p>              
                     Also read &nbsp; <a href="" className="has-text-link"><i className="fas fa-bookmark"></i>&nbsp; Lessons learned from Redux.js</a>
                  </p>
               </div>
               </div>
            </div>				
         </div>
         {/* RoboRedux */}
         {/* Smart Brain */}
               <div className="column">
            <div className="card">
               <div className="card-image">
               <figure className="image is-4by3">
                  <a href="https://drcardamom.github.io/smart-brain/">
                     <img src="https://thumbs.gfycat.com/SneakyWealthyKakapo-size_restricted.gif" alt="smartbrain demo" />
                  </a>
               </figure>
               </div>
               <div className="card-content">
               <h1 className="title is-4 app-demo-title">
                  Smart Brain
                  <span className="icon">
                     <a href="https://drcardamom.github.io/smart-brain/">
                     <i className="far fa-play-circle"></i>                  
                     </a>
                  </span>  
                  <span className="icon">
                     <a href="https://github.com/DrCardamom/smart-brain">
                     <i className="fab fa-github has-text-link"></i>
                     </a>
                  </span>
                  <span className="icon">
                     <a href="https://github.com/DrCardamom/smart-brain-api">
                     <i className="fab fa-github has-text-link"></i>
                     </a>
                  </span>
               </h1>
               <div className="tags  is-marginless">
                  <span className="tag is-primary is-light"><i className="fab fa-react"></i> &nbsp; React.js</span>
                  <span className="tag is-primary is-light"><i className="fab fa-node-js"></i> &nbsp; Node.js</span>
                  <span className="tag is-primary is-light"><i className="fas fa-database"></i> &nbsp; PostgreSQL</span>
                  <span className="tag is-primary is-light"><i className="fas fa-code-branch"></i> &nbsp; Clarifai AI API</span>
               </div>
               <div className="content">
                  <p>
                     Input an image address in the search box and voila! It shows where exactly a face locates in the image. 
                     This app works with AI-powered API and stores user data in PostgreSQL database hosted on Heroku. 
                  </p>
                  <p>
                     Also read &nbsp; <a href="" className="has-text-link"><i className="fas fa-bookmark"></i>&nbsp;Lessons learned from making web app "Smart Brain"</a>
                  </p>
               </div>
               </div>
            </div>				
         </div>
         {/* Smart Brain */}
         </div>
         </div>
      </section>	
   )
}

