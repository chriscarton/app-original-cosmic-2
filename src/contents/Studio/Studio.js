import React, { Component } from 'react';

export class Studio extends Component {


    toggleForm(e){
        let form = document.querySelector('.contact-form');
        if(form.classList.contains('active')){
            form.classList.remove('active');
        }else{
            form.classList.add('active');
        }
    }

    render() {
        return (
            <div>
                <div className="presentation">
                    <p>
                    Original Cosmic est un studio de design graphique et d’animation basé à Lille.<br/>
                    C’est la convergence d’esprits libres, soucieux de fournir une production graphique travaillée, dépouillée, parfois sensible et complexe mais toujours singulière.
                    </p>
                    <p>
                        <b>Nos champs d’activité :</b><br/>
                        – Identité visuelle (Print et multimédia) : définition de l’image de marque, design de logos, signalétique, catalogues, pochettes de disque, développement de site internet.<br/>
                        – Vidéo et animation : réalisation de clip, vidéo promotionnelle, animation 3D, motion design.<br/>
                        – Photographie : base visuelle de bon nombre de projets, nous produisons les supports photographiques nécessaires.<br/>
                        Shooting, packshot produit,etc.<br/>
                        – Illustration
                    </p>
                    <hr/>
                    <p>
                        <b>Directeur de création :</b> Frank Essam<br/>
                        <b>Directeur artistique / Designer graphique :</b> Raphaël Kucharski<br/>
                        <b>Développeurs / Intégrateurs web :</b> Chris Carton & Julien Leclercq<br/>
                        <b>Animateurs 2D-3D / Illustrateurs :</b> Romain Marchetti, Denis Fleurion, Adrien Lannoy, Julien Adoum<br/>
                    </p>
                    <hr/>
                    <p>
                        <a href="mailto:contact@originalcosmic.fr" className="mailto">contact@originalcosmic.fr</a><br/>
                        <a className="show-form" onClick={(e)=>this.toggleForm(e)}>utiliser un superbe formulaire de contact</a><br/>
                        +33 (0) 6 18 78 43 78<br/>
                    </p>
                </div>
                <form className="contact-form">
                    <div className="col-2">
                        <input type="text" placeholder="nom"/>
                        <input type="text" placeholder="prénom"/>
                    </div>

                    <input type="text" placeholder="sujet"/>

                    <textarea placeholder="message"></textarea>
                    <div className="submit-container">
                        <input type="submit" value="envoyer"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Studio
