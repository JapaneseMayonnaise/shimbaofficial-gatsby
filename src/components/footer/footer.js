import React from "react"
import "../../../sass/mystyles.scss"
import style from "./footer.module.css"

export default function Footer() {
  return (
    <footer
      className={`footer ${style.footerBackground} ${style.footerSticky}`}
    >
      <div className="content has-text-centered">
        <p className="has-text-white  has-text-weight-semibold">
          ELLIOT SHIMBA &nbsp;&copy;&nbsp; 2020-2022
        </p>
      </div>
    </footer>
  )
}
