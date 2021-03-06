import React, { Component } from 'react';


class Navbar extends Component {

    render() {
        return (
            <nav className="navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#"><span className ="navbar-name">Nathan Carpenter</span></a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="./img/NathanCarpenterResume.pdf"><span className="navbar-links">Resume</span></a></li>
                        <li><a href="https://github.com/nathancarpenter03?tab=repositories"><span className="navbar-links">Projects</span></a></li>
                        <li><a href="https://www.linkedin.com/in/nathan-carpenter/"><span className="navbar-links">Contact</span></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
