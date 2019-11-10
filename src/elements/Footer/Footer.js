import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

export class Footer extends Component {


    //Si on est déjà sur la page contact 
    //On scroll vers le formulaire
    scrollToForm(){
        let form = document.querySelector('#FormContact');
        
        //Bon à l'avenir on trouvera une condition plus élégante j'espère
        if(form !== null){
            if(form.length>0){
                window.scrollTo({
                    top:form.offsetTop-75,
                    behavior:'smooth'
                });
            }
        }
    }

    render() {
        return (
            <footer id="Footer">
                <div className="content">
                    <nav id="Socials">
                        <Link to="/contact" onClick={this.scrollToForm}>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </Link>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/OriginalCosmic">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/original_cosmic_studio/">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        
                    </nav>
                    <div className="text">
                        © 2019 / Original Cosmic <br/>
                        Visual Arts Studio <br/>
                        <Link to="/mentions">Mentions légales</Link>
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer
