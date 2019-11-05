import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

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
            <div id="Screen">
                <video
                    className="video"
                    autoPlay
                    muted
                    id="landingVideo"
                >
                <source
                    src={process.env.PUBLIC_URL + '/video/ocwall.mp4'}
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
            </div>
        )
    }
}

export default Landing
