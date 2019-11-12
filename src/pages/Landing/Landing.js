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

    /* 
        Bon on pourrait mettre le logo en svg en tant que poster 
        Mais le logo est noir, de plus il est dans src/assets... 
        Et ensuite je ne sais pas comment le positionner. 

        Donc pour l'instant on garde le poster.png
    */

    render() {
        return (
            <div id="Screen">
                <video
                    className="video"
                    autoPlay
                    muted
                    id="landingVideo"
                    poster={process.env.PUBLIC_URL + '/img/poster.png'}
                    //poster={process.env.PUBLIC_URL + '/img/logo.svg'}
                    playsInline={true}
                >
                <source
                        src={process.env.PUBLIC_URL + '/video/ocwall1c.mp4'}
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
