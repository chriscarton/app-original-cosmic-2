import React, { Component } from 'react';
import './Header.scss';

import { Link, NavLink } from 'react-router-dom';

import blacklogo from '../../assets/img/blacklogo.png';
import svgLogo from '../../assets/img/logo.svg';

export class Header extends Component {
    
    componentDidMount(){
        console.log('Hello. Have a nice day.');
    }

    render() {
        return (
            <header id="Header" className="small-header">
                <Link to="/">
                    <img src={svgLogo} alt="Logo de notre super agence!"/>
                </Link>
                <div className="menu">
                    <NavLink to="/projets" className="menu-link" activeClassName="active">Projets</NavLink>
                    <NavLink to="/studio" className="menu-link" activeClassName="active">Contact</NavLink>
                </div>
            </header>
        )
    }
}

export default Header
