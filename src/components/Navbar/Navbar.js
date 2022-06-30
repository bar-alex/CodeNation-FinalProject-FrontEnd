import React, { Component } from 'react';
import { MenuItems} from "./MenuItems"
import { Button } from"../Button"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                {/* i tag includes a logo which is imported from fontawesome.com (will be changed when we deicde a logo). "fab fa-react is just the name of the logo that was imported from the website"  */}
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                 {/* The code below allows us to change the 'menu' icon into the 'X' icon when it is clicked.
                     The i tag below allows us to import the 'X' icon and the 'menu' icon, which you can see in the navbar when in mobile version. */}
                 
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })} 
                </ul>
                <Button>Sign up</Button>
            </nav>
        )
    }
}

export default Navbar