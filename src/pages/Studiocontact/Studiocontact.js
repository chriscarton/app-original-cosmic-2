import React, { Component } from 'react';
import './Studiocontact.scss';
import StudioContent from '../../contents/Studio/Studio.js';

export class Studiocontact extends Component {
    
    componentDidMount() {
        this.smallHeader();
    }
    
    smallHeader(){
        let header = document.querySelector('#Header');
        header.classList.add('small-header')
    }

    render() {
        return (
            <div className="page" id="Studiocontact">
                <div className="grid">
                    
                    <article>
                        <StudioContent/>
                    </article>


                    <div id="Denis">
                        <img alt="" src={process.env.PUBLIC_URL+"/img/team/DENIS.jpg"}/>
                    </div>
                    <div id="Adrien">
                        <img alt="" src={process.env.PUBLIC_URL+"/img/team/ADRIEN.jpg"} />
                    </div>
                    
                    <div id="Romain">
                        <img alt="" src={process.env.PUBLIC_URL+"/img/team/ROMAIN.jpg"} />
                    </div>
                    <div id="Julien">
                        <img alt="" src={process.env.PUBLIC_URL+"/img/team/JULIEN.jpg"} />
                    </div>
                    
                    <div id="Raph">
                        <img alt="" src={process.env.PUBLIC_URL+"/img/team/RAPH.jpg"} />
                    </div>
                    <div id="Frank">
                        <img alt="" src={process.env.PUBLIC_URL+"/img/team/FRANK.jpg"} />
                    </div>
                    <div id="Chris">
                        <img alt="" src={process.env.PUBLIC_URL+"/img/team/CHRIS.jpg"} />
                    </div>
                    <div id="Emma">
                        <img alt="" src={process.env.PUBLIC_URL+"/img/team/EMMA.jpg"} />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Studiocontact
