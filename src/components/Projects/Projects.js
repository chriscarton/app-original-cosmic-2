import React, { Component } from 'react'
import './Projects.scss';
import { Link } from 'react-router-dom';

import Media from '../../elements/Media/Media.js';
import Header from '../../elements/Header/Header.js';
import Footer from '../../elements/Footer/Footer.js';

export class Projects extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            projects:null
        }
        
    }

    componentDidMount() {
       //Juste pour être sur qu'on revienne bien au plafond lors de la navigation
        window.scrollTo(0, 0);

        var the_prefix = "http://localhost/backend-oc/wordpress/wp-json/wp/v2/";
        var the_url = the_prefix+"posts?_embed=true&per_page=100&order=asc";

        //alert(the_url);

        fetch(the_url)
            .then(response=>response.json())
            .then(response=>{

                //console.log(response);
                /*
                response.forEach(function(item){
                    console.log(item);
                });
                */
                this.setState({
                    projects:response
                })
            });

        
    }

 


    render() {

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
                            <Link to={`projet/${item.slug}`}>
                                <Media
                                    key={index}
                                    item={item}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
                : null }
                <Footer />
            </div>
        )
    }


}

export default Projects
