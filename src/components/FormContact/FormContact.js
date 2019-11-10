import React, { Component } from 'react';
import './FormContact.scss';
import axios from 'axios';

export class FormContact extends Component {

    //Essentiellement ce formulaire de contact reprends la logique de la doc officielle : 
    //https://fr.reactjs.org/docs/forms.html

    state = {
        nom:'',
        prenom:'',
        sujet:'',
        message:'',
        email:'',
        phone:''
    };

    constructor(props){
        super(props);
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

    //Utiliser cette syntaxe
    handleSubmit = event => {
        event.preventDefault();
        console.log('oh my god this form has been submited!');

        //voir : 
        //https://alligator.io/react/axios-react/

        
        const contact = {
            prenom: this.state.prenom,
            nom:this.state.nom,
            sujet:this.state.sujet,
            message:this.state.message,
            email:this.state.email,
            phone:this.state.phone
        };

        

        axios.post(`http://localhost/submit.php`, { contact })
        //axios.post(`https://originalcosmic.fr/submit`, { contact })
            .then(res => {
                //console.log(res);
                
                //Ceci fonctionne mais me donne un warning
                //if(res.data != undefined){

                if(res.data !== null){
                    //On sélectionne le formulaire
                    let form = document.querySelector('form');

                    //On affiche la réponse
                    let form_response = document.querySelector('.form-response');
                    form_response.style.display = 'flex';

                    //On met le petit message
                    let text = form_response.querySelector('.text');
                    text.textContent = res.data.message;

                    if(res.data.type==="success"){

                        //On cache le formulaire
                        form.style.display = 'none';

                        //On met la petite icône
                        let icon = form_response.querySelector('.icon');
                        icon.classList.add('fa');
                        icon.classList.add('fa-check');


                    } else if (res.data.type === "error"){

                        //Bon on a pas une validation côté serveur assez poussée pour avoir des erreurs. 

                        //On met la petite icône
                        let icon = form_response.querySelector('.icon');
                        icon.classList.add('fa');
                        icon.classList.add('fa-remove');
                        
                    }
                }
            });
       
       

    }

    render() {
        return (
            <>
                <div className="form-response">
                    <i className="icon"></i>&nbsp;
                    {/* <i className="fa fa-remove"></i> */}
                    <p className="text"></p>
                </div>
                <form autoComplete="off" id="FormContact" className="contact-form" onSubmit={this.handleSubmit}>
                    <div className="col-2">
                        <input type="text" 
                            placeholder="nom" 
                            required
                            name="nom" 
                            minLength="2"
                            onChange={this.handleInputChange}
                        />
                        <input type="text" 
                            placeholder="prénom" 
                            required
                            name="prenom"
                            minLength="2" 
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <input type="text" 
                        placeholder="sujet" 
                        required
                        name="sujet"
                        minLength="2"
                        onChange={this.handleInputChange}
                    />
                    <textarea 
                        placeholder="message" 
                        required
                        name="message" 
                        minLength="10"
                        onChange={this.handleInputChange}></textarea>

                    <div className="col-2">
                        <input type="email" 
                            placeholder="email" 
                            required
                            name="email" 
                            onChange={this.handleInputChange} 
                        />
                        <input type="phone" 
                            placeholder="téléphone" 
                            name="phone" 
                            onChange={this.handleInputChange} 
                        />
                    </div>

                    <div className="submit-container">
                        <input type="submit" value="envoyer"/>
                    </div>
                </form>
            </>
        )
    }
}

export default FormContact
