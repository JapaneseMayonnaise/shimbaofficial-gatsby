import React from "react"
import { Link } from "gatsby"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faMediumM } from "@fortawesome/free-brands-svg-icons"
import { faDev } from "@fortawesome/free-brands-svg-icons"
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import "../../../sass/mystyles.scss"
import Icon from "./Icon"

class Navbar extends React.Component {
  state = {
    isToggleMenuEnabled: false,
  }

  OnClickToggle = () => {
    this.setState({
      isToggleMenuEnabled: !this.isToggleMenuEnabled,
    })
  }

  render() {
    let { title } = this.props
    return (
      <nav
        className="navbar is-spaced is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <h1 className="has-text-weight-bold is-size-3 has-text-primary brand-name">
              {title}
            </h1>
          </Link>

          <a
            role="button"
            onClick={this.OnClickToggle}
            className={`navbar-burger ${
              this.isToggleMenuEnabled ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar_menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbar_menu"
          className={`navbar-menu ${
            this.state.isToggleMenuEnabled ? "is-active" : ""
          }`}
        >
          <div className="navbar-start">
            <Link to="/technicalGrowthLog/" className="navbar-item">
              Growth Log
            </Link>
            <Link to="/portfolio/" className="navbar-item">
              Portfolio
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Icon href="https://github.com/DrCardamom" iconName={faGithub} />
              <Icon
                href="https://www.linkedin.com/in/eshimba/"
                iconName={faLinkedinIn}
              />
              <Icon href="https://dev.to/drcardamom" iconName={faDev} />
              <Icon
                href="https://stackoverflow.com/users/11227880/shimba?tab=profile"
                iconName={faStackOverflow}
              />
              <Icon
                href="https://medium.com/@elliotshimba"
                iconName={faMediumM}
              />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
