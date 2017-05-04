import React, { Component } from 'react';


class Social extends Component {

    render() {
        return (
            <div>
            <a  name="contact"></a>
<div className="banner">

        <div className="container">

            <div className="row">
                <div className="col-lg-6">
                    <h2>Connect with me:</h2>
                </div>
                <div className="col-lg-6">
                    <ul className="list-inline banner-social-buttons">
                        <li>
                            <a href="https://twitter.com/ncarp33" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw fa-con"></i> <span className="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/nathancarpenter03?tab=repositories" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw fa-con"></i> <span className="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/nathan-carpenter/" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw fa-con"></i> <span className="network-name">Linkedin</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <footer className="text-center">
        <div className="footer-above">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-md-4">
                        <h3 className="h3-nathan">Nathan Carpenter</h3><br/>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>nathan.carpenter03@gmail.com</h3>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3><a href="./img/NathanCarpenterResume.pdf" className="link">Resume (click here)</a></h3>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
            </div>
        )
    }
}

export default Social;
