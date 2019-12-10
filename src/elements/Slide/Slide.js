import React, { Component } from 'react';
import './Slide.scss';

export class Slide extends Component {

    constructor(props){
        super(props);
        this.state = {
            slide : this.props.slide
        }
    }

    render() {

        let slide = this.props.slide;
        
        return (
            <div id="Slide">
                {slide.type==='image' && 
                    <img src={slide.url}/>
                }
                {slide.type==='video' &&
                    <video
                        className="media video"
                        autoPlay 
                        loop
                        muted
                        playsInline={true}
                        // onLoadedData={this.slideIsLoaded}
                    >
                        <source 
                            // src={process.env.PUBLIC_URL+'/'+this.props.path+'/'+media.src} 
                            type="video/mp4" 
                        />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                }
                {slide.type==="content" &&
                    <>
                        {slide.content}
                    </>
                }
            </div>
        )
    }
}

export default Slide
