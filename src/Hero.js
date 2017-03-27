import React, { Component } from 'react';


class Hero extends Component {


    render() {
        return (
            <div className="header fade-header slide" data-ride="header" data-interval="4000" id="bs-header">
                <div className="header-inner">
                    <div className="item slides active">
                    <div className="overlay"></div>
                        <div className="slide-1"></div>
                        <div className="hero">
                            <hgroup>
                                <h1>INDIANAPOLIS BASED<br/>FRONT END DEVELOPER</h1>
                                <h3>with a passion for seamless user experience<br/>and beautifully clean and responsive design</h3>
                            </hgroup>
                            <button className="btn btn-hero btn-lg" role="button">Contact me</button> 
                            <div className="arrow-down">
                              <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Hero;