import React, { Component } from 'react';
import parse from 'html-react-parser';
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
            <div className="slide">
                {slide.type==='image' && 
                    <img src={slide.url}/>
                }
                {slide.type==='video' &&
                    <video
                        autoPlay 
                        loop
                        muted
                        playsInline={true}
                    >
                        <source 
                            src={slide.content} 
                            type="video/mp4" 
                        />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                }
                {slide.type==="content" &&
                    <>
                        {parse(slide.content)}
                    </>
                }
            </div>
        )
    }
}

export default Slide
