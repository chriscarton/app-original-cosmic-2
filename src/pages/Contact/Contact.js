import React, { Component } from 'react';
import './Contact.scss';
import StudioContent from '../../contents/Studio/Studio.js';
import Header from '../../elements/Header/Header.js';
import Footer from '../../elements/Footer/Footer.js';

export class Contact extends Component {
    
    //Juste pour être sur qu'on revienne bien au plafond lors de la navigation
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <>
                <Header/>
                <div className="page" id="Contact">
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
                <Footer/>
            </>
        )
    }
}

export default Contact
