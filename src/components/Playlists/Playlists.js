import React, { Component } from 'react';
import Media from '../../elements/Media/Media.js';
import './Playlists.scss';
import { Link } from 'react-router-dom';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';

export class Playlists extends Component {

    constructor(props){
        super(props);
    }

    render() {        
        let props = this.props;
        console.log(props.item.medias);

        return (
            <div id="Playlists">
                <div className="bar topbar">
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
                {props.item.medias.map((media,index)=>(
                    <div className="media">
                        <Media 
                            key={index}
                            media={media}
                            path='img/medias'
                        />
                    </div>
                ))}
                <div className="bar bottombar">
                    <div className="to-contact">
                        <Link to="/studio" onClick={this.scrollToForm}>
                            <i className="fa fa-envelope" aria-hidden="true"></i> Contact
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Playlists
