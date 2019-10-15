import React, { Component } from 'react';
import './showreel.scss';

export class Showreel extends Component {
    render() {
        return (
            <div id="Showreel">                
                <video
                    id="Video"
                    className="media-video"
                    autoPlay
                    controls
                >
                    <source src={process.env.PUBLIC_URL + '/video/ocskills.mp4'} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video> 

                {/* <Plyr
                type="youtube" // or "vimeo"
                    videoId={process.env.PUBLIC_URL + '/video/ocskills.mp4'}
                /> */}

            </div>
        )
    }
}

export default Showreel
