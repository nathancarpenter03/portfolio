import React, { Component } from 'react';


class WorkSampleRight extends Component {

    render() {
        return (
            <div className="content-section-b">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                            <hr className="section-heading-spacer" />
                            <div className="clearfix"></div>
                            <h2 className="section-heading">{this.props.title}<br />
                            <span className="stack">{this.props.stack}</span></h2>
                            <p className="lead">{this.props.description}</p> <br/>
                            <a className="github-link" href="https://www.w3schools.com">Click to view on Github</a>
                        </div>
                        <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                            <img className="img-responsive image-right" src={this.props.screenshot} alt={this.props.alt} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkSampleRight;

