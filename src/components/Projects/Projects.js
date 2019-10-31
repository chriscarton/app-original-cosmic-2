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
            projects:data
        }
    }

    //Juste pour être sur qu'on revienne bien au plafond lors de la navigation
    componentDidMount() {
        window.scrollTo(0, 0);
    }

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
}

export default Projects
