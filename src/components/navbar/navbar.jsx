import React, { Component } from 'react';
import "./navbar.css"
import logo from "../../assets/icons/logo-white.png"

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav>
                <div>
                    <img src={logo} alt="logo" />
                    <ul>
                        <li><a href="">Behandlungen</a></li>
                        <li><a href="">Salon</a></li>
                        <li><a href="">Über Uns</a></li>
                        <li><a href="">Kontakt</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;