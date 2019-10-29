import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import SingleProject from '../../components/SingleProject/SingleProject.js';

export class Landing extends Component {

    /* Permet de cliquer sur l'intégralité de la landing page pour entrer sur le site */
    handleClick(e){
        let target = e.target;
        let link = target.querySelector('a');

        if(link){
            link.click();       
        }
    }

    render() {
        return (
            <div id="Landing" onClick={(e)=>this.handleClick(e)}>
                <h1><Link to="/projets">Original Cosmic</Link></h1>
                <p><Link to="/projets">Studio de design graphique et d'animation</Link></p>
            </div>
        )
    }
}

export default Landing
