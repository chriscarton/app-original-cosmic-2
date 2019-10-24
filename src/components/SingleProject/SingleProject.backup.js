import React, { Component } from 'react'
import data from '../Projects/data.js';
import './SingleProject.scss';
import parse from 'html-react-parser';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';

import { Link } from "react-router-dom";

import Media from '../../elements/Media/Media.js';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export class SingleProject extends Component {
    constructor(props) {

        super(props);

        let paramSlug = this.props.match.params.slug;

        let results = data.filter(function (entry,index) {
            
            if (entry.slug === paramSlug) {

                entry.prev = data[index-1];
                entry.next = data[index+1];

                return entry;
            }
        });
        let match = results[0];

        this.state = {
            match: match
        }

    }


    //Pour régler le problème de persistence des images lors de la navigation précédent suivant
    componentWillUpdate(){

        let imgs = document.querySelectorAll('#singleProject img');

        if(imgs){
            imgs.forEach(function(img){
                img.removeAttribute('src')
            });
        }
    }

    componentDidUpdate(){
        window.scrollTo(0, 0);
        //new Glide('.glide').mount();
    }

    //Pour mettre à jour le composant si navigation précédent ou suivant
    componentWillReceiveProps(nextProps) {

        window.scrollTo(0, 0);

        let paramSlug = nextProps.match.params.slug;

        let results = data.filter(function (entry, index) {
            if (entry.slug === paramSlug) {

                entry.prev = data[index - 1];
                entry.next = data[index + 1];

            }
            return entry;
        });
        let match = results[0];

        this.setState({
            match: match
        });
        
    }


    Gallery = () => {

        let match = this.state.match;

        const handleOnDragStart = e => e.preventDefault();
        return (
            <div className="visual">
                <AliceCarousel 
                    autoPlayInterval={2000}
                    autoPlay={true}
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    >

                    {match.medias.length > 0 && match.medias.map((media, index) => (
                        
                        // <Media
                        //     key={index}
                        //     index={index}
                        //     media={media}
                        //     path='img/medias'
                        // />

                        <div
                            key={index}
                            className="item"
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/' + 'img/medias' + '/' + media.src}
                                alt=""
                            />
                        </div>
                    ))}
                </AliceCarousel>
                <nav id="carouselNav">
                    <button onClick={() => this.Carousel.slidePrev()}>Prev button</button>
                    <button onClick={() => this.Carousel.slideNext()}>Next button</button>
                </nav>
            </div>
        )
    }

    render() {

        let match = this.state.match;
        
        let prev = match.prev;
        let next = match.next;
        
        return (
            <div id="singleProject">
                
                    
                    {this.Gallery()}
                    
                
                <div className="informations">

                    <nav id="ProjectNav">
                        <Link to="/">Retour</Link>
                        {prev &&
                            <ProjectNav direction="prev" arrow="left" link={`/projet/${prev.slug}`} text="Précédent" />
                        }
                        {next &&
                            <ProjectNav direction="next" arrow="right" link={`/projet/${next.slug}`} text="Suivant" />
                        }
                    </nav>

                    {this.state.match.content &&
                        <div className="content">
                            {parse(this.state.match.content)}
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default SingleProject