import React, { Component } from 'react';
import './Mentions.scss';

import Header from '../../elements/Header/Header.js';
import Footer from '../../elements/Footer/Footer.js';

import parse from 'html-react-parser';

import url_prefix from '../../url_prefix.js';
//Voir : https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228

/*
    Attention : l'absence d'une information obligatoire est punie d'une amende de 1 500 €. Tout traitement informatique non consenti des données recueillies est puni de 5 ans d'emprisonnement et de 300 000 € d'amende.
*/

export class Mentions extends Component {


    constructor(props) {

        super(props);

        this.state = {
            text:null
        }

    }

    queryingPost(){


        var the_url = url_prefix+"singleText/mentions-legales";
        
        //http://localhost/backend-oc/wordpress/wp-json/oc/v1/singleText/mentions-legales

        fetch(the_url)
            .then(response=>response.json())
            .then(response=>{
                this.setState({
                    text:response
                })
            });


    }

    componentDidMount() {
        //Juste pour être sur qu'on revienne bien en haut de la page lors de la navigation
        window.scrollTo(0, 0);

        this.queryingPost();
    }



    render() {
        let text = this.state.text;

        return (
            <>
                <Header/>
                {text ? (
                    <div id="Mentions">
                        {parse(text.content)}
                    </div>
                ):(
                    <div></div>
                )}
                <Footer/>
            </>
        )
    }
}

export default Mentions
