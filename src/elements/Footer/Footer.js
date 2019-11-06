import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

export class Footer extends Component {

    scrollToForm(){
        let form = document.querySelector('#FormContact');
        //Bon à l'avenir on trouvera une condition plus élégante j'espère
        if(form != undefined){
            if(form.length>0){
                window.scrollTo({
                    top:0,
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
                        <Link to="/studio" onClick={this.scrollToForm}>
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
                        Visual Arts Studio
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer
