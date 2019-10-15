import React, { Component } from 'react'
import data from '../Projects/data.js';
import './SingleProject.scss';
import parse from 'html-react-parser';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';

import Media from '../../elements/Media/Media.js';

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


    cartouche(){
        return(
            <div className="cartouche">
                {this.state.match.content && 
                <div className="content">
                    {parse(this.state.match.content)}
                </div>
                }
            </div>
        );
    }
    
 
    render() {

        let match = this.state.match;
        
        let prev = match.prev;
        let next = match.next;
        
        return (
            <div id="singleProject">
                <div className={`grid ${match.slug}`}>
                    {this.cartouche()}
            
                    {match.medias.length > 0 && match.medias.map((media, index) => (
                        <div
                            className={`media media${index}`}
                        >
                            <Media
                                key={index}
                                index={index}
                                media={media}
                                path='img/medias'
                            />
                        </div>
                    ))}

                    {prev && 
                        <ProjectNav direction="prev" arrow="left" link={`/projet/${prev.slug}`} text="Projet précédent" />
                    }
                    {next && 
                        <ProjectNav direction="next" arrow="right" link={`/projet/${next.slug}`} text="Projet suivant" />
                    }
                </div>
            </div>
        )
    }
}

export default SingleProject
