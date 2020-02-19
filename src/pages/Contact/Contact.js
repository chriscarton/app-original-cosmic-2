import React, { Component } from 'react';
import './Contact.scss';
import Studio from '../../contents/Studio/Studio.js';
import Header from '../../elements/Header/Header.js';
import Footer from '../../elements/Footer/Footer.js';

export class Contact extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            items:null
        }
        
    }

    componentDidMount() {
       //Juste pour être sur qu'on revienne bien en haut de la page lors de la navigation
        window.scrollTo(0, 0);

        var the_prefix = "http://localhost/backend-oc/wordpress/wp-json/oc/v1/";
        var the_url = the_prefix+"members";

        

        fetch(the_url)
            .then(response=>response.json())
            .then(response=>{

                console.log(the_url);
                console.log(response);
                /*
                response.forEach(function(item){
                    console.log(item);
                });
                */
                this.setState({
                    items:response
                })
            });

        
    }
    
    render() {

        let items = this.state.items;

        return (
            <>
                <Header/>
                <div className="page" id="Contact">
                    <div className="grid">
                        <article>
                            <Studio/>
                        </article>
                        {items ? 
                            <>
                                {items.map(function(item){
                                    return(
                                        <div key={item.id}>
                                            <img 
                                                alt="" 
                                                src={item.thumbnails.full.src}
                                            />
                                        </div>
                                    )
                                })}
                            </>
                        : null }                        
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Contact
