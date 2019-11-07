import React, { Component } from 'react';
import Media from '../../elements/Media/Media.js';
import './Playlists.scss';

export class Playlists extends Component {

    constructor(props){
        super(props);
    }

    render() {        
        let props = this.props;
        console.log(props.item.medias);

        return (
            <div id="Playlists">
                {props.item.medias.map((media,index)=>(
                    <div className="media">
                        <Media 
                            key={index}
                            media={media}
                            path='img/medias'
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default Playlists
