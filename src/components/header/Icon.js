import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from "./icon.module.css"

const Icon = (props) => (
   <span className={`icon is-large ${style.navbarIcons}`}>
      <a href={props.href}>
         <FontAwesomeIcon icon={props.iconName} className="fab fa-2x has-text-link"/>
      </a>
   </span>
)

export default Icon;