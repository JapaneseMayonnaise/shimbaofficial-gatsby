import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = (props) => (
   <span className="icon is-large navbar-icons">
      <a href={props.href}>
         <FontAwesomeIcon icon={props.iconName} className="fab fa-2x has-text-link"/>
      </a>
   </span>
)

export default Icon;