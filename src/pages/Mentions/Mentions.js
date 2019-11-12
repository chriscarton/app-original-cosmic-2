import React, { Component } from 'react';
import './Mentions.scss';

import Header from '../../elements/Header/Header.js';
import Footer from '../../elements/Footer/Footer.js';

//Voir : https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228

/*
    Attention : l'absence d'une information obligatoire est punie d'une amende de 1 500 €. Tout traitement informatique non consenti des données recueillies est puni de 5 ans d'emprisonnement et de 300 000 € d'amende.
*/

export class Mentions extends Component {
    render() {
        return (
            <>
                <Header/>
                <div id="Mentions">
                    <div className="title">Édition</div>
                    <p>
                        Le site internet originalcosmic.fr, est édité par : <br/>
                        Nom,<br/>
                        Adresse,<br/>
                        Code Postal Ville,<br/>
                        Pays<br/>
                        En tant que (personne morale),<br/>
                        Téléphone : <br/>
                        Email : contact@originalcosmic.fr
                    </p>

                    <div className="title">Auteurs</div>
                    <p>
                        Le directeur de publication : Nom Prénom<br/>
                        Le co-directeur de publication : Nom Prénom<br/>
                    </p>

                    <div className="title">Hébergement</div>
                    <p>
                        Le site internet, originalcosmic.fr, est hébergé par :<br />
                        OVH,<br />
                        dont le siège social se situe :<br />
                        2 rue Kellermann,<br />
                        59100 Roubaix, France.<br />
                    </p>

                    <div className="title">Protection du droit d'auteur, propriété intellectuelle</div>
                    <p>
                        L'ensemble des documents, images, vidéos, textes et autre médias de ce site internet est protégé par les législations françaises et internationales concernant le droit d'auteur et la propriété intellectuelle. Les droits de reproduction des documents, images, vidéos et autres médias sont intégralement réservés.
                    </p>

                    <div className="title">Informatique et liberté</div>
                    <p>
                        Conformément aux articles 39 et suivants de la loi n° 78-17 du 6 janvier 1978 modifiée en 2004 relative à l’informatique, aux fichiers et aux libertés, toute personne peut obtenir communication et, le cas échéant, rectification ou suppression des informations la concernant, en nous en adressant la demande via mail, courrier ou téléphone.
                    </p>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Mentions
