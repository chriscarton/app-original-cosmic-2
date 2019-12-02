import React, { Component } from 'react'
import './Projects.scss';
import data from './data.js';
import { Link } from 'react-router-dom';

import Media from '../../elements/Media/Media.js';
import Header from '../../elements/Header/Header.js';
import Footer from '../../elements/Footer/Footer.js';

export class Projects extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            //projects:data
            projects:null
        }
        
    }
    

    //Juste pour être sur qu'on revienne bien au plafond lors de la navigation
    componentDidMount() {
        window.scrollTo(0, 0);

        //var the_url = "http://localhost/backend-oc/wordpress/wp-json/wp/v2/posts";

        var the_url = "http://localhost/backend-oc/wordpress/wp-json/wp/v2/posts?_embed&per_page=100&order=asc";

        //var prefix = "http://localhost/backend-oc/wordpress/wp-json/wp/v2/";
        //var the_url = prefix + "posts?filter[posts_per_page]=5&_embed";

        fetch(the_url)
            .then(response=>response.json())
            .then(response=>{
                this.setState({
                    projects:response
                })
            });
    }

 
/*    
    render() {
        return (
            <div id="Projects">
                <Header/>
                <div className="items">
                    {this.state.projects.map((item,index)=>(
                        <div className={`item ${item.slug}`} key={item.id}>
                            <Link to={`projet/${item.slug}`}>
                                <Media
                                    key={index}
                                    index={index}
                                    media={item.cover}
                                    path='img/projects'
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                <Footer/>
            </div>
        )
    }
*/

    render() {
        console.log(typeof this.state.projects);
        console.log(this.state.projects);
        return (
            <div id="Projects">
                <Header />
                {this.state.projects ? 
                <div className="items">
                    {this.state.projects.map((item, index) => (
                        <div
                            className={`item ${item.slug}`} 
                            key={item.id}
                        >
                            {/* {item.title.rendered} <br/> */}
                            
                            {<Link to={`projet/${item.slug}`}>
                                {item._embedded['wp:featuredmedia'] ?
                                <>
                                {/* {item._embedded['wp:featuredmedia']['0'].source_url} */}
                                    <img 
                                        src={item._embedded['wp:featuredmedia']['0'].source_url}
                                        style={{maxWidth:'100%',display:'block'}} 
                                    />
                                </>
                                :   
                                <>
                                    {'Pas de visuel pour :'+item.title.rendered }
                                </>
                                }
                            </Link>}


                        </div>
                        // <div className={`item ${item.slug}`} key={item.id}>
                        //     <Link to={`projet/${item.slug}`}>
                        //         <Media
                        //             key={index}
                        //             index={index}
                        //             media={item.cover}
                        //             path='img/projects'
                        //         />
                        //     </Link>
                        // </div>
                    ))}
                </div>
                : null }
                <Footer />
            </div>
        )
    }


}

export default Projects
