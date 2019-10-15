import React, { Component } from 'react'
import './Projects.scss';
import data from './data.js';
import { Link } from 'react-router-dom';

import Media from '../../elements/Media/Media.js';

export class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {
            projects:data
        }
    }

    render() {
        return (
            <div id="Projects">
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
            </div>
        )
    }
}

export default Projects
