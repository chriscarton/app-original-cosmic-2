import React, { Component } from 'react'
import data from '../Projects/data.js';
import './SingleProject.scss';

import Playlists from '../../components/Playlists/Playlists.js';
import Gallery from '../Gallery/Gallery.js';

export class SingleProject extends Component {
    constructor(props) {

        super(props);

        let paramSlug = this.props.match.params.slug;

        let results = data.filter(function (entry,index) {
            
            if (entry.slug === paramSlug) {

                entry.prev = data[index-1];
                entry.next = data[index+1];

                return entry;
            }else{
                return null;
            }
        });
        let match = results[0];

        this.state = {
            match: match
        }

    }


    //Pour régler un eventuel problème de persistence des images lors de la navigation précédent suivant (ce problème survenait avec l'ancien design)
    UNSAFE_componentWillUpdate(){

        let imgs = document.querySelectorAll('#singleProject img');

        if(imgs){
            imgs.forEach(function(img){
                img.removeAttribute('src')
            });
        }
    }

    //Juste pour être sur qu'on revienne bien au plafond lors de la navigation
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(){
        window.scrollTo(0, 0);
    }

    //Pour mettre à jour le composant si navigation précédent ou suivant
    UNSAFE_componentWillReceiveProps(nextProps) {

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

        return (
            <div className="visual">
                
            </div>
        )
    }

    render() {

        let match = this.state.match;

        let playlistsMode = null;
        if(typeof match.type !== "undefined"){
            if(match.type === 'playlists'){
                playlistsMode = true;
            }
        }
        
        return (
            <div id="singleProject">
                {playlistsMode ? (
                    <Playlists item={match}></Playlists>
                ) : (
                    <Gallery item={match}></Gallery>
                )}
            </div>
        )
    }
}

export default SingleProject