import React, { Component } from 'react';
import parse from 'html-react-parser';
import './Media.scss';
import LazyLoad from 'react-lazyload';

export class Media extends Component {

    constructor(props){
        super(props);
        this.state = {
            medias:null
        }
    }
    
    /* 
        Permet d'ajouter une classe pour déclencher une animation lorsque l'image ou la video est chargée
        Pour l'instant je ne vois pas comment le faire pour les iframes... 
    */
    mediaIsLoaded(e){  
        e.target.classList.add('is-loaded');
    }

   

    componentDidMount(){
        let parent_id = this.props.parent_id;
        var the_prefix = "http://localhost/backend-oc/wordpress/wp-json/wp/v2/";
        var the_url = the_prefix+"media?parent="+parent_id;

        console.log(the_url);

        //Bon là du coup j'ai aussi les autres médias et pas seulement la featured image

        fetch(the_url)
            .then(response=>response.json())
            .then(response=>{

                response.forEach(function(item){
                    console.log(item.media_details.sizes);
                });

                this.setState({
                    medias:response
                })
            });
    }


    render() {
        let medias = this.state.medias;

        if(medias){
            return(
                <>
                    {medias.map(media=>(
                        <React.Fragment key={media.id}>
                            {media.media_type==="image" && 

                                <>
                                    <img 
                                        srcSet={
                                            Object.keys(media.media_details.sizes).map(function(key){
                                                let size = media.media_details.sizes[key];
                                                return(
                                                    size.source_url + ' ' + size.width + 'w'
                                                );
                                            })
                                        }
                                        src={media.source_url}
                                        alt="myimagealt"
                                    />
                                </>
                            }
                            {media.media_type==="file" &&
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
                            }
                        </React.Fragment>
                    ))}
                </>
            );
        }else{
            return null;
        }

        
    }
}

export default Media
