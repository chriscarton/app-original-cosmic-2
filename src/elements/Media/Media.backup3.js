import React, { Component } from 'react';
import parse from 'html-react-parser';
import './Media.scss';
import LazyLoad from 'react-lazyload';

export class Media extends Component {

    constructor(props){
        super(props);
        this.state = {
            item:null,
            featuredMedia:null
        }
    }

    componentDidMount(){
        let item = this.props.item;
        this.setState({
            item:item
        });

        let featured_media = item._embedded['wp:featuredmedia'];

        if(typeof featured_media !== 'undefined'){
            let media = featured_media[0];   

            this.setState({
                featuredMedia:media
            });
        }        
    }

    
    /* 
        Permet d'ajouter une classe pour déclencher une animation lorsque l'image ou la video est chargée
        Pour l'instant je ne vois pas comment le faire pour les iframes... 
    */
    mediaIsLoaded(e){  
        e.target.classList.add('is-loaded');
    }


    render() {

        let media = this.state.featuredMedia;

        if(media !== null){

            return(
                <img 
                srcSet={
                        Object.keys(media.media_details.sizes).map(function(key){
                            let size = media.media_details.sizes[key];
                            return(
                                size.source_url + ' ' + size.width + 'w'
                            );
                        })
                    }
                    alt="myimagealt"
                />
            );
            
        }else{
            return null;
        }
        




        
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