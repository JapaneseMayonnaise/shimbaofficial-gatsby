import React from "react"
import "../../../sass/mystyles.scss"
import style from "./footer.module.css"

export default function Footer() {
   return (
      <footer className={`footer ${style.footerBackground}`}>
         <div className="content has-text-centered">
            <p className="has-text-white  has-text-weight-semibold">
               ELLIOT SHIMBA &nbsp;&copy;&nbsp; 2020
            </p>
            <hr className={style.hr} /> 
            <a href="https://bulma.io">
               <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="160" height="30" />
            </a>
         </div>
      </footer> 
   )
}
