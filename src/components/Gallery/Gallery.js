import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';
import parse from 'html-react-parser';
import Media from '../../elements/Media/Media.js';

export default class Gallery extends React.Component {

    //Ce serait là dedans qu'il faudrait inclure notre composant Media
    state = {
        galleryItems: this.props.item.medias.map((media,index) => (
            <div className="item" key={index}>
                <Media
                    key={index}
                    index={index}
                    media={media}
                    path='img/medias'
                    useMaxWidth={true}
                />
            </div>
        ))
    }

    informations(){

        return(
            <div className="informations">

                <div id="mainNav">
                    <Link to="/projets">
                        <i className="fa fa-chevron-left"></i>
                        &nbsp;Retour
                    </Link>
                    <div id="projectNav">
                        {this.props.item.prev &&
                            <ProjectNav direction="prev" arrow="left" link={`/projet/${this.props.item.prev.slug}`} text="Précédent" />    
                        }
                        {this.props.item.next &&
                            <ProjectNav direction="next" arrow="right" link={`/projet/${this.props.item.next.slug}`} text="Suivant" />
                        }
                    </div>
                </div>
                {this.props.item.medias.length > 1 && 
                <nav id="mediasPagination">
                    {this.props.item.medias.map(this.thumbItem)}
                </nav>
                }
                {this.props.item.content &&
                    <div className="content">
                        {parse(this.props.item.content)}
                    </div>
                }
                <div className="to-contact">
                    <Link to="/contact" onClick={this.scrollToForm}>
                        <i className="fa fa-envelope" aria-hidden="true"></i> Contact
                    </Link>
                </div>

            </div>
        );
    }

    //Doesn't work on I.E, A A
    handleThumbClick(i,e){
        this.Carousel.slideTo(i);
        let prevActive = document.querySelector('.media-link-active');
        if(prevActive != null){
            prevActive.classList.remove('media-link-active');
        }
        e.target.classList.add('media-link-active');
    }

    thumbItem = (item, i) => (
        <button className="media-link" href="#" key={item} onClick={(e) => this.handleThumbClick(i,e)}>
            {i+1}
        </button>
    )

    render() {
        return (
            <>
                <div className="visual">
                    <AliceCarousel
                        dotsDisabled={true}
                        buttonsDisabled={true}
                        items={this.state.galleryItems}
                        ref={(el) => (this.Carousel = el)}
                    />                    
                </div>
                {this.informations()}
            </>
        )
    }
}