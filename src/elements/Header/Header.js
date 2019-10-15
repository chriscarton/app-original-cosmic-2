import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import yellogo from '../../assets/img/yellogo.png';

import Typed from 'typed.js';

export class Header extends Component {
    
    componentDidMount(){
        let strings = document.querySelector('#typed-strings').textContent;

        new Typed('#typed', {
            strings: [strings],
            typeSpeed: 50,
            startDelay: 1500,
            showCursor: false
        });
    }

    render() {
        return (
            <header id="Header" className="small-header">
                <div className="part">
                    <Link to="/">
                        <img src={yellogo} alt="Logo de notre super agence!"/>
                    </Link>
                </div>
                <div className="part not-a-baseline">
                    <h1>Original cosmic</h1>
                    <div id="typed"></div>
                    <h2 id="typed-strings">Studio de design graphique ^1000et d'animation</h2>
                </div>
                <div className="part menu">
                    {/* <Link className="arrow-link" to="/showreel">Showreel</Link> */}
                    <Link className="arrow-link" to="/studio">Studio / Contact</Link>
                </div>
            </header>
        )
    }
}

export default Header
