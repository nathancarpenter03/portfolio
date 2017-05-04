import React, { Component } from 'react';


class Skills extends Component {

    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Skills and Technologies</h1>
                </div>
                <div className="container container-skills">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <div className="box">							
                                <div className="icon">
                                    <div className="image"><i className="fa fa-pencil"></i></div>
                                    <div className="info">
                                        <h3 className="title">Languages</h3>
                                        <p>Javascript, HTML5, CSS3/SASS, SQL</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <div className="box">							
                                <div className="icon">
                                    <div className="image"><i className="fa fa-book"></i></div>
                                    <div className="info">
                                        <h3 className="title">Libraries and Frameworks </h3>
                                        <p>React.js, Node.js, Express.js, jQuery, Bootstrap, Bulma</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="col-xs-12 col-sm-6 col-lg-4">
                            <div className="box">							
                                <div className="icon">
                                    <div className="image"><i className="fa fa-wrench"></i></div>
                                    <div className="info">
                                        <h3 className="title">Tools</h3>
                                        <p>NPM, Yarn, Gulp, Webpack, PostgreSQL</p>
                                    </div>
                                </div>
                            </div> 
                        </div>		    
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;