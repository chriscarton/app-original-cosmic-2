import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';
import parse from 'html-react-parser';
import Slide from '../../elements/Slide/Slide';
//import Media from '../../elements/Media/Media.js';


export default class Gallery extends React.Component {

    //Ce serait là dedans qu'il faudrait inclure notre composant Media
    state = {
        galleryItems: this.props.project.slides.map((slide,index) => (
            <div className="slide" key={index}>
                <Slide slide={slide}/>
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
                        {this.props.project.previous &&
                            <ProjectNav direction="prev" arrow="left" link={`/projet/${this.props.project.previous.slug}`} text="Précédent" />    
                        }
                        {this.props.project.next &&
                            <ProjectNav direction="next" arrow="right" link={`/projet/${this.props.project.next.slug}`} text="Suivant" />
                        }
                    </div>
                </div>
                {this.props.project.slides.length > 1 && 
                <nav id="mediasPagination">
                    {this.props.project.slides.map(this.thumbproject)}
                </nav>
                }
                {this.props.project.content &&
                    <div className="content">
                        <h1 className="title">{this.props.project.name}</h1>
                        {parse(this.props.project.content)}
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
        let prevActive = document.querySelector('.media-active');
        if(prevActive != null){
            prevActive.classList.remove('media-active');
        }
        e.target.classList.add('media-active');
    }

    thumbproject = (project, i) => {
        let addClass = null;
        if(i===0){
            addClass ="media-active"
        }
        return(
        <button className={`media-link ${addClass}`} href="#" key={i} onClick={(e) => this.handleThumbClick(i,e)}>
            {i+1}
        </button>
        )
    }

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