import React, { Component } from 'react';
import './about.css';
import facebook from  '../../imgs/about/facebook.png';
import twitter from  '../../imgs/about/twitter.png';
import google from  '../../imgs/about/google.png';
import linkedin from  '../../imgs/about/linkedin.png';
import be from  '../../imgs/about/be.png';

export {
    styleTitle
};

const styleTitle = {
    color: '#292f36',
    fontSize: '36px',
    textTransform: 'uppercase',
    marginTop: '80px',
    marginLeft: '25px',
    fontFamily: 'font-family: \'Quattrocento Sans\', sans-serif;',
    fontWeight: 'bold'
};

export default class About extends Component {

    render(){
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about_title">
                                <h2 style={styleTitle}>WE ARE MODEST</h2>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="left_block_about">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at. </p>
                                <p>Phasellus sollicitudin ante eros ornare, sit amet luctus lorem semper. Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum</p>
                            </div>
                            <div className="social-icon">
                                <img className="img-fluid" src={facebook} alt="facebook"/>
                                <img className="img-fluid" src={twitter} alt="twitter"/>
                                <img className="img-fluid" src={google} alt="google"/>
                                <img className="img-fluid" src={linkedin} alt="linkedin"/>
                                <img className="img-fluid" src={be} alt="be"/>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right_block_about">
                                <div className="inner_right_block_about">
                                    <h3>Dedication to the customers</h3>
                                    <p>Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae tristique nisi, vitae ullamcorper risus</p>
                                </div>
                                <div className="inner_right_block_about before_two">
                                    <h3>Working closely with our clients</h3>
                                    <p>Sed blandit nisi urna, sed pellentesque enim consectetur vitae. Suspendisse ut vehicula nibh.</p>
                                </div>
                                <div className="inner_right_block_about before_three">
                                    <h3>Increase happiness</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend laoreet euismod.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}