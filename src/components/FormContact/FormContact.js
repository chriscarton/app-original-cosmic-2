import React, { Component } from 'react';
import './FormContact.scss';
import axios from 'axios';

export class FormContact extends Component {

    //Essentiellement ce formulaire de contact reprends la logique de la doc officielle : 
    //https://fr.reactjs.org/docs/forms.html

    constructor(props){
        super(props);
        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('oh my god this form has been submited!');

        //voir : 
        //https://alligator.io/react/axios-react/

        //Bon faut voir dans quoi je vais recup contact dans submit.php

        const contact = {
            prenom: this.state.prenom,
            nom:this.state.nom,
            sujet:this.state.sujet,
            message:this.state.message,
            email:this.state.email,
            phone:this.state.phone
        };

        axios.post(`https://originalcosmic.fr/submit`, { contact })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        //Bon du coup il faut : 
            //Ma requête ajax 
            //Mon submit.php, que je place dans public ?

    }

    render() {
        return (
            <form id="FormContact" className="contact-form" onSubmit={this.handleSubmit}>
                <div className="col-2">
                    <input type="text" placeholder="nom" name="nom" onChange={this.handleInputChange}/>
                    <input type="text" placeholder="prénom" name="prenom" onChange={this.handleInputChange}/>
                </div>

                <input type="text" placeholder="sujet" name="sujet" onChange={this.handleInputChange}/>
                <textarea placeholder="message" name="message" onChange={this.handleInputChange}></textarea>

                <div className="col-2">
                    <input type="email" placeholder="email" name="email" onChange={this.handleInputChange} />
                    <input type="phone" placeholder="téléphone" name="phone" onChange={this.handleInputChange} />
                </div>

                <div className="submit-container">
                    <input type="submit" value="envoyer"/>
                </div>
            </form>
        )
    }
}

export default FormContact
