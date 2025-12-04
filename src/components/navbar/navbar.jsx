import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav>
                <img src="/" alt="" />
                <ul>
                    <li><a href="">Behandlungen</a></li>
                    <li><a href="">Salon</a></li>
                    <li><a href="">Über Uns</a></li>
                    <li><a href="">Kontakt</a></li>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;