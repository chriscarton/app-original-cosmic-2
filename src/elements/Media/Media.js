import React, { Component } from 'react';
import parse from 'html-react-parser';
import './Media.scss';
import LazyLoad from 'react-lazyload';

export class Media extends Component {

    constructor(props){
        super(props);
        this.state = {
            item:this.props.item
        }
    }

    componentDidMount(){
        
        /*
        let featured_media = item._embedded['wp:featuredmedia'];

        if(typeof featured_media !== 'undefined'){
            let media = featured_media[0];   

            this.setState({
                featuredMedia:media
            });
        }
        */   
    }

    
    /* 
        Permet d'ajouter une classe pour déclencher une animation lorsque l'image ou la video est chargée
        Pour l'instant je ne vois pas comment le faire pour les iframes... 
    */
    mediaIsLoaded(e){  
        e.target.classList.add('is-loaded');
    }


    render() {

        let item = this.state.item;
        let thumbnails = item.thumbnails;
        
        return(
            <div className={`media is-loaded ${item.slug}`}>
                {item.extrait_video ? (
                    <video 
                        className="media video"
                        onLoadedData={this.mediaIsLoaded}
                        src={item.extrait_video} 
                        autoPlay 
                        loop
                        muted
                        playsInline={true}
                    ></video>
                ):(
                <img 
                    srcSet=""
                    src={thumbnails.full.src}
                    alt=""
                />
                )}
            </div>
        );

        
    }
}

export default Media

/*

    //En cas de video il faudra ajouter ceci : 

    <video
        className="media video"
        autoPlay 
        loop
        muted
        playsInline={true}
        onLoadedData={this.mediaIsLoaded}
    >
        <source 
            src={media.source_url} 
            type="video/mp4" 
        />
        Votre navigateur ne supporte pas la vidéo.
    </video>

*/