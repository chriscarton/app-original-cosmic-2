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
            <>
                <video
                    className="video"
                    autoPlay
                    loop
                    muted
                    playsInline={false}
                    id="landingVideo"
                >
                <source
                    src={process.env.PUBLIC_URL + '/video/ocskills.mp4'}
                    type="video/mp4"
                />
                Votre navigateur ne supporte pas la vidéo.
                </video>
            <div id="Landing" onClick={(e)=>this.handleClick(e)}>
                <div>
                    <h1><Link to="/projets">original cosmic</Link></h1>
                    <p><Link to="/projets">studio de design graphique<br/> et d'animation.</Link></p>
                </div>
            </div>
            </>
        )
    }
}

export default Landing
