import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import parse from 'html-react-parser';


export class Landing extends Component {

    constructor(props) {

        super(props);

        this.state = {
            item:null
        }
    }

    queryingPost(){

        var the_prefix = "http://localhost/backend-oc/wordpress/wp-json/oc/v1/";
        var the_url = the_prefix+"landing";
        console.log(the_url);
        
        fetch(the_url)
            .then(response=>response.json())
            .then(response=>{
                console.log(response);
                this.setState({
                    item:response
                })
            });


    }

    //Juste pour être sur qu'on revienne bien au plafond lors de la navigation
    componentDidMount() {
        window.scrollTo(0, 0);

        this.queryingPost();
    }

    /* Permet de cliquer sur l'intégralité de la landing page pour entrer sur le site */
    handleClick(e){
        let target = e.target;
        let link = target.querySelector('a');

        if(link){
            link.click();
        }
    }

    render() {

        let landing = this.state.item;

        

        if(landing != null){

            let poster = process.env.PUBLIC_URL + '/img/poster.svg';

            let title = landing.title;
            let description = landing.content;

            let image = landing.image_alternative;

            return (
                <div id="Screen">
                    {landing.video ? (
                    <video
                        className="video"
                        autoPlay
                        muted
                        id="landingVideo"
                        poster={poster}
                        playsInline={true}
                    >
                    <source
                        src={landing.video}
                        type="video/mp4"
                    />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    ):(
                        <>
                            <img
                                id="landingImage"
                                src={image.url}
                                srcSet=""
                                alt=""
                            />
                        </>
                    )}
                    <div id="Landing" onClick={(e)=>this.handleClick(e)}>
                        <div>
                            <h1><Link to="/projets">{title}</Link></h1>
                            <div><Link to="/projets">{parse(description)}</Link></div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null;
        }
    }
}

export default Landing
