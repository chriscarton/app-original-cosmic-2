import React, { Component } from 'react';
import './Tests.scss';
import items from '../Projects/data.js';
import parse from 'html-react-parser';


export class Tests extends Component {


    componentDidMount(){
        let imgs = document.querySelectorAll('img');
        
        imgs.forEach(function(img){
            
            img.addEventListener('load',function(){
                console.log(img.src+img.naturalWidth);
            });

        });
        
    }
    
    render() {

        let path = 'img/projects';
        
        return (
            <div id="Tests">
                <div className="grid">
                    {items.map(function(item){
                        return(
                            <div className="item" key={item.id}>
                                <img src={process.env.PUBLIC_URL + '/' + path + '/' + item.cover.src}/> 

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
