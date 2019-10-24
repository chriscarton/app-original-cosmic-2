import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import blacklogo from '../../assets/img/blacklogo.png';

export class Header extends Component {
    
    componentDidMount(){
        console.log('Hello. Have a nice day.');
    }

    render() {
        return (
            <header id="Header" className="small-header">
                <Link to="/">
                    <img src={blacklogo} alt="Logo de notre super agence!"/>
                </Link>
                <div className="menu">
                    <Link to="/projets">Projets</Link>
                    <Link to="/studio">Studio / contact</Link>
                </div>
            </header>
        )
    }
}

export default Header
