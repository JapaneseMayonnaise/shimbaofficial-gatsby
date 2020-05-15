import React, { Component } from 'react'
import Link from 'gatsby-link'

class Navbar extends Component {

    state = {
        //This sets the state of Bulma elements
        navbarIsActive: "navbar-item has-dropdown"
      }

      //This opens the navbar dropdown
      navbarOpenDropdown = () => {
        this.setState({
          navbarIsActive: "navbar-item has-dropdown is-active"
        })
      }

      //This closes the navbar dropdown
      navbarCloseDropdown = () => {
        this.setState({
          navbarIsActive: "navbar-item has-dropdown"
        })
      }

    render() {
        return(
            <div>
                <nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
                    <a class="navbar-item">
                        <h1>Title!</h1>
                    </a>

                    <div 
                        class={this.state.navbarIsActive}
                        onMouseEnter={this.navbarOpenDropdown}
                        onMouseLeave={this.navbarCloseDropdown}
                        >
                        <a class="navbar-link">
                            Docs
                        </a>

                        <div class="navbar-dropdown is-boxed">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/blog">Blog</Link>
                            <hr class="navbar-divider"/>
                            <div class="navbar-item">
                                Version 0.7.2
                            </div>
                        </div>
                    </div>
                </nav>

                <section class="hero">
                    <div class="hero-body">
                        <p class="title">
                            Documentation
                        </p>
                        <p class="subtitle">
                            Everything you need to <strong>create a website</strong> with Bulma
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Navbar;