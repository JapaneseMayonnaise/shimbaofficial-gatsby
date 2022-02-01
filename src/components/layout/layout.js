import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import style from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <Header className="has-navbar-fixed-top" />
      {children}
      <Footer className={`${style.footerSticky}`} />
    </div>
  )
}
