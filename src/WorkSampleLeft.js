import React, { Component } from 'react';


class WorkSampleLeft extends Component {

    render() {
        return (
            <div>
                <div className="content-section-a">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-6">
                                <hr className="section-heading-spacer" />
                                <div className="clearfix"></div>
                                <h2 className="section-heading">{this.props.title}<br />{this.props.stack}</h2>
                                <p className="lead">{this.props.description}</p> <br/>
                                <a className="github-link" href="https://www.w3schools.com">Click to view on Github</a>
                            </div>
                            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                                <img className="img-responsive" src={this.props.screenshot} alt={this.props.alt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkSampleLeft;

