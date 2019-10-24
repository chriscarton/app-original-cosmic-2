import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';
import parse from 'html-react-parser';

export default class Gallery extends React.Component {

    //Ce serait là dedans qu'il faudrait inclure notre composant Media
    state = {
        galleryItems: this.props.item.medias.map((media,index) => (
            <div className="item" key={index}>
                <img
                    src={process.env.PUBLIC_URL + '/' + 'img/medias' + '/' + media.src}
                    alt=""
                />
            </div>
        ))
    }

    informations(){
        return(
            <div className="informations">

                <div id="mainNav">
                    <Link to="/">
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
                <nav id="mediasPagination">
                    {this.props.item.medias.map(this.thumbItem)}
                </nav>
                   
                {this.props.item.content &&
                    <div className="content">
                        {parse(this.props.item.content)}
                    </div>
                }

                <div className="divinement-vide">
                    {/* Solution temporaire définitive */}
                </div>

            </div>
        );
    }

    thumbItem = (item, i) => (
        <a key={item} onClick={() => this.Carousel.slideTo(i)}>
            {i+1}
        </a>
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