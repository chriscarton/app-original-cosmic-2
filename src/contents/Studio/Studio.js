import React, { Component } from 'react';
import FormContact from '../../components/FormContact/FormContact.js';
import parse from 'html-react-parser';


export class Studio extends Component {

    constructor(props) {

        super(props);

        this.state = {
            text:null
        }

    }

    queryingPost(){

        var the_prefix = "http://localhost/backend-oc/wordpress/wp-json/oc/v1/";
        var the_url = the_prefix+"singleText/contact";
        
        //http://localhost/backend-oc/wordpress/wp-json/oc/v1/singleText/contact

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
        
        if(text !== null){
            return(
                <div>
                    <div className="presentation">
                        {parse(text.content)}
                    </div>
                    <FormContact/>
                </div>
            )
        }else{
            return '';
        }





        
    }
}

export default Studio
