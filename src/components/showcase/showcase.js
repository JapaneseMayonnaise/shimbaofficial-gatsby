import React from "react"
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons"
import { faServer } from "@fortawesome/free-solid-svg-icons"
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import "../../../sass/mystyles.scss"
import style from  './showcase.module.css'

export default function Showcase () {
   return (
      <section className={`section top-section is-paddingless same-layer ${style.sameLayer}`} id="portfolio">
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
               <h1 className={`title is-size-4 is-size-5-touch ${style.appDemoTitle}`}>
                  Democratic Carpool Karaoke
                  <span className={`${style.icon}`}>
                     <a href="https://democratic-carpool-karaoke.herokuapp.com/">
                        <FontAwesomeIcon icon={faPlayCircle} className="fab has-text-link size" />
                     </a>
                  </span>
                  <span className={`${style.icon}`}>
                     <a href="https://github.com/DrCardamom/democratic-carpool-karaoke">
                       <FontAwesomeIcon icon={faGithub} className="fab has-text-link size" />
                     </a>
                  </span>
               </h1>
               <div className="tags  is-marginless">
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faReact} />  
                        &nbsp; React.js
                  </span>
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faNodeJs} />
                        &nbsp; Node.js
                  </span>
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faServer} />
                        &nbsp; Heroku
                  </span>
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faSpotify} />
                        &nbsp; Spotify API
                  </span>
               </div>
               <div className="is-size-5 is-size-6-touch content">
                  <p>
                     Going on a drive with your grandparents? Don't know what to listen to?
                     This web app generates a Spotify playlist for you that consists of 50 popular songs of your generation and another 50 of your carpool-buddies' generation, all evenly mixed.
                     Give it a try!
                  </p>
                  <p>
                     Also read &nbsp;
                  <Link to="/what-i-learned-from-making-my-web-app-democratic-carpool-karaoke/ "className="has-text-link">
                     <FontAwesomeIcon icon={faBookmark} className="fab has-text-link"/>
                     &nbsp;Lessons learned from making web app "Democratic Carpool Karaoke"
                  </Link>
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
                  <h1 className={`title is-size-4 is-size-5-touch ${style.appDemoTitle}`}>
                     RoboRedux
                     <span className={`${style.icon}`}>
                        <a href="https://drcardamom.github.io/RoboRedux/">
                           <FontAwesomeIcon icon={faPlayCircle} className={`has-text-link ${style.size}`} />
                        </a>
                     </span>
                     <span className={`${style.icon}`}>
                        <a href="https://github.com/DrCardamom/RoboRedux">
                        <FontAwesomeIcon icon={faGithub} className={`has-text-link ${style.size}`} />
                        </a>
                     </span>
                  </h1>
                  <div className="tags  is-marginless">
                     <span className="tag is-primary is-light">
                           <FontAwesomeIcon icon={faReact} />
                           &nbsp; React.js
                     </span>                 
                     <span className="tag is-primary is-light">
                           <FontAwesomeIcon icon={faReact} />
                           &nbsp; Redux.js
                     </span>                    
                  </div>
                  <div className="content is-size-5 is-size-6-touch ">
                     <p>
                        Mini robo search engine powered by React.js and Redux.js. Logs changes of the state using Redux-logger and handle API call with Redux-thunk.
                     </p>
                     <p>
                        Also read &nbsp;
                     <Link to="/Intro-to-Redux/" className="has-text-link">
                        <FontAwesomeIcon icon={faBookmark} className="fas has-text-link"/>
                        &nbsp; Intro to Redux.js
                     </Link>
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
               <h1 className={`title is-size-4 is-size-5-touch ${style.appDemoTitle}`}>
                  Smart Brain
                  <span className={`${style.icon}`}>
                     <a href="https://drcardamom.github.io/RoboRedux/">
                        <FontAwesomeIcon icon={faPlayCircle} className={`has-text-link ${style.size}`} />
                     </a>
                  </span>
                  <span className={`${style.icon}`}>
                     <a href="https://github.com/DrCardamom/smart-brain">
                       <FontAwesomeIcon icon={faGithub} className={`has-text-link ${style.size}`} />
                     </a>
                  </span>
                  <span className={`${style.icon}`}>
                     <a href="https://github.com/DrCardamom/smart-brain-api">
                       <FontAwesomeIcon icon={faGithub} className={`has-text-link ${style.size}`} />
                     </a>
                  </span>
               </h1>
               <div className="tags  is-marginless">
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faReact} />
                        &nbsp; React.js
                  </span>                 
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faNodeJs} />
                        &nbsp;  Node.js
                  </span>                 
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faDatabase} />
                        &nbsp; PostgreSQL
                  </span>                 
                  <span className="tag is-primary is-light">
                        <FontAwesomeIcon icon={faCodeBranch} />
                        &nbsp; Clarifai AI API
                  </span>                 
               </div>
               <div className="content is-size-5 is-size-6-touch">
                  <p>
                     Input an image address in the search box and voila! It shows where exactly a face locates in the image. 
                     This app works with AI-powered API and stores user data in PostgreSQL database hosted on Heroku. 
                  </p>
                  <p>
                     Also read &nbsp;
                  <Link to="/what-i-learned-from-making-my-web-app-smart-brain/" className="has-text-link">
                     <FontAwesomeIcon icon={faBookmark} className="fas has-text-link"/>
                     &nbsp; Lessons learned from making web app "Smart Brain"
                  </Link>
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

