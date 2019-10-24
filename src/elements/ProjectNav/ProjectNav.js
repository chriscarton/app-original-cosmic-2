import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectNav.scss';

export class ProjectNav extends Component {

    render() {
        
        return (
            <nav id="ProjectNav">
                <Link 
                    to={{
                        pathname:this.props.link,
                        state:'flushDeal'
                    }}
                    className={`nav nav-${this.props.direction}`}
                    onClick={this.handleClick}
                >
                    {this.props.direction==="prev" && 
                        <>
                            <i className={`fa fa-arrow-${this.props.arrow}`}></i>
                            &nbsp;{this.props.text}
                        </>
                    }
                    {this.props.direction === "next" &&
                        <>
                            {this.props.text}&nbsp;
                            <i className={`fa fa-arrow-${this.props.arrow}`}></i>
                        </>
                    }
                </Link>
            </nav>
        )
    }
}

export default ProjectNav
