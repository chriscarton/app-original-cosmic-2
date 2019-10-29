//N'est pas utilisé

import React, { Component } from 'react'
import './Image.scss';

export class Image extends Component {

    constructor() {
        super();
        this.state = { loaded: false };
    }

    render() {
        return (
            <>
                {/* 
                {this.state.loaded ? null :
                    <div
                        className="placeholder"
                    >
                        <div className="lds-circle">
                            <div></div>
                        </div>
                    </div>
                }
                */}
                <img
                    style={this.state.loaded ? {} : { opacity: 0 }}
                    src={this.props.src}
                    className={this.state.loaded ? ("img-component isLoaded") : ("img-component")}
                    onLoad={() => this.setState({ loaded: true })}
                />  
            </>
        )
    }
}

export default Image