import React, { Component } from 'react';
//import Media from '../../elements/Media/Media.js';
import './Playlists.scss';
import { Link } from 'react-router-dom';
import ProjectNav from '../../elements/ProjectNav/ProjectNav.js';
import parse from 'html-react-parser';


export class Playlists extends Component {

    constructor(props){
        super(props);

        

        this.state = {
            extraitVideo:props.item.extrait_video,    
            playlistId:this.props.item.playlist,
            playlist:null,
            otherPlaylists:null
        }
    }

    componentDidMount(){
        

        this.queryingMainPlaylist();
        this.queryingOtherPlaylists();

    }


    queryingMainPlaylist(){

        var the_prefix = "http://localhost/backend-oc/wordpress/wp-json/oc/v1/";
        var the_url = the_prefix+"singlePlaylist/"+this.state.playlistId;


        fetch(the_url)
            .then(response=>response.json())
            .then(response=>{
                this.setState({
                    playlist:response
                })
            });


    }

    queryingOtherPlaylists(){

        var the_prefix = "http://localhost/backend-oc/wordpress/wp-json/oc/v1/";
        var the_url = the_prefix+"otherPlaylists/"+this.state.playlistId;

        

        fetch(the_url)
            .then(response=>response.json())
            .then(response=>{
                console.log(response);
                this.setState({
                    otherPlaylists:response
                })
            });


    }

    render() {        
        let props = this.props;
        let mainPlaylist = this.state.playlist;

        console.log(mainPlaylist);

        let otherPlaylists = this.state.otherPlaylists;
        
        return (
            <div id="ocPlaylists">
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

                <div className="container">
                    {mainPlaylist ? (
                        
                            <div id="mainPlaylist">
                                <div>
                                    <video
                                        autoPlay 
                                        loop
                                        muted
                                        playsInline={true}
                                    >
                                        <source 
                                            src={this.state.extraitVideo} 
                                            type="video/mp4" 
                                        />
                                        Votre navigateur ne supporte pas la vidéo.
                                    </video>
                                </div>
                                <div>
                                    <h3>{mainPlaylist.title}</h3>
                                    {parse(mainPlaylist.content)}
                                </div>
                            </div>
                        
                    ):(
                        null
                    )}
                    <div id="otherPlaylists">
                        {otherPlaylists ? (
                            <>
                                <h4 className="title">Nos autres playlists :</h4>
                                <div className="grid">

                                    {otherPlaylists.map(function(playlist){
                                        return(
                                            <div key={playlist.id} className="playlist">
                                                <div>
                                                    <h3>{playlist.title}</h3>
                                                    {parse(playlist.content)}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                        ):(
                            null
                        )}
                    </div>
                </div>

                
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
