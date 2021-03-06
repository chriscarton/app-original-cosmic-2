import React, { Component } from 'react';
import parse from 'html-react-parser';
import './Media.scss';
import LazyLoad from 'react-lazyload';

export class Media extends Component {
    
    /* 
        Permet d'ajouter une classe pour déclencher une animation lorsque l'image ou la video est chargée
        Pour l'instant je ne vois pas comment le faire pour les iframes... 
    */
    mediaIsLoaded(e){  
        e.target.classList.add('is-loaded');
    }

    render() {

        let media = this.props.media;

        //Cette condition permet de contraindre l'image à une largeur maximale en ajoutant un style à la balise 
        let style= {};

        if (this.props.useMaxWidth === true && media.versions){
            style={
                maxWidth: media.versions[media.versions.length - 1] + 'px'
            }
        }

        let srcSet = null;

        if (typeof media.versions !== 'undefined') {
            srcSet = media.versions.map((w) => (
                process.env.PUBLIC_URL + '/' + this.props.path + '/' + w + '/' + media.src + ' ' + w + 'w'
            ));
            
            //On ajoute l'image originale (il faut que sa largeur soit spécifiée)
            if(typeof media.originalWidth !== 'undefined'){
                srcSet.push(process.env.PUBLIC_URL + '/' + this.props.path + '/' + media.src + ' ' + media.originalWidth + 'w');
            }

        }
        
        return (
            
            <>
                {media.type === 'image' &&
                    <LazyLoad throttle={-200} height={0} once>
                        <img 
                            srcSet={srcSet}
                            src={process.env.PUBLIC_URL+'/'+this.props.path+'/'+media.src} 
                            style={style}
                            alt=""
                            className="media"
                            onLoad={this.mediaIsLoaded}
                        />
                    </LazyLoad>
                }
                {media.type === 'video' &&
                    <video
                        className="media video"
                        autoPlay 
                        loop
                        muted
                        playsInline={true}
                        onLoadedData={this.mediaIsLoaded}
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
