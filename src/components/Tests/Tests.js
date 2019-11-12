import React, { Component } from 'react';
import './Tests.scss';
import items from '../Projects/data.js';
import parse from 'html-react-parser';


export class Tests extends Component {



    render() {
        
        return (
            <div id="Tests">
                <div className="grid">
                    {items.map(function(item){
                        return(
                            <div className="item">
                                {parse(item.content)}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

/*

Voilà mes tests...
                <p>Afficher les slugs de data.js</p>
                <hr/>
                {data.map(function(project){
                    return(
                    <div>
                        {project.slug}
                    </div>
                    )
                })}
*/

export default Tests
