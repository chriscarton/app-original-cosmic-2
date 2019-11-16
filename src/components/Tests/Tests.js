import React, { Component } from 'react';
import './Tests.scss';
import items from '../Projects/data.js';
import parse from 'html-react-parser';


export class Tests extends Component {


    componentDidMount() {
        let imgs = document.querySelectorAll('img');

        imgs.forEach(function (img) {

            img.addEventListener('load', function () {
                console.log(img.src + '   '+ img.naturalWidth);
            });

        });

    }

    render() {
        console.log(items);
        //let path = 'img/medias';
        let path = 'img/projects';

        return (
            <div id="Tests">
                <div className="grid">
                    {items.map(function (item) {
                        return (
                            <div className="item" key={item.id}>
                                {item.cover.type === "image" &&
                                    <div>
                                        {item.cover.versions.map(function(version,i){
                                            return(
                                                <div>
                                                    version {version} : <br/>

                                                    <img src={process.env.PUBLIC_URL + '/' + path + '/' + version + '/' + item.cover.src} />
                                                </div>
                                            )
                                        })}
                                        {/* <img src={process.env.PUBLIC_URL + '/' + path + '/' + media.src} /> */}

                                    </div>
                                }
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
