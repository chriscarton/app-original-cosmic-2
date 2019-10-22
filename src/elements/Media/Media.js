import React, { Component } from 'react';
import parse from 'html-react-parser';
import Plyr from 'plyr';
import './Media.scss';

export class Media extends Component {



    render() {

        let media = this.props.media;

        return (
            <>
                {media.type === 'image' &&
                    <img 
                        srcSet={media.versions.map((w) => (
                            process.env.PUBLIC_URL+'/'+this.props.path+'/' + w + '/' + media.src + ' ' + w + 'w'
                        ))} 
                        src={process.env.PUBLIC_URL+'/'+this.props.path+'/'+media.src} 
                        alt=""  
                        sizes="100vw"
                        style={{maxWidth:media.versions[media.versions.length-1]+'px'}}
                    />
                }
                {media.type === 'video' &&
                    <video
                        className="video"
                        autoPlay 
                        loop
                        muted
                    >
                        <source 
                            src={process.env.PUBLIC_URL+'/'+this.props.path+'/'+media.src} 
                            type="video/mp4" 
                        />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                }
                {media.type === 'playlist' &&
                    <div className="playlist">
                        {parse(media.src)}
                    </div>
                }
                {media.type === 'iframe' &&
                    <div className="iframe-container">
                        {parse(media.src)}
                    </div>
                }
            </>
        )
    }
}

export default Media
