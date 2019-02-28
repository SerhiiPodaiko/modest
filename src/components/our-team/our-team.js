import React, { Component } from 'react';
import {styleTitle} from '../about/about';
import './our-team.css';
import gloria from  '../../imgs/our-team/gloria.png';
import paul from  '../../imgs/our-team/paul.png';
import jutith from  '../../imgs/our-team/jutith.png';
import delores from  '../../imgs/our-team/delores.png';
import facebook from '../../imgs/our-team/facebook.png';
import twitter from  '../../imgs/our-team/twitter.png';
import linkedin from  '../../imgs/our-team/linkedin.png';

export default class Ourteam extends Component {

    render(){
        return (
            <div className="our-team">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={styleTitle}>meet the team.</h2>
                        </div>
                        <div className="col-md-12">
                            <div className="gallery">
                                <div className="row">
                                    <div className="col-md-3 col-sm-3 col-6 inner_gallery"><img className="img-fluid" src={gloria} alt=""/>
                                        <div className="quote">
                                            <h4>Gloria Bromley</h4>
                                            <p>CEO and Founder</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-6 inner_gallery"><img className="img-fluid" src={paul} alt=""/>
                                        <div className="quote">
                                            <h4>Paul Torres</h4>
                                            <p>Head of Development</p>
                                            <div className="social_icon">
                                                <img className="img-fluid" src={twitter} alt="twitter"/>
                                                <img className="img-fluid" src={facebook} alt="facebook"/>
                                                <img className="img-fluid" src={linkedin} alt="linkedin"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-6 inner_gallery"><img className="img-fluid" src={jutith} alt=""/>
                                        <div className="quote">
                                            <h4>Judith Gillette</h4>
                                            <p>Graphic Desinger</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-6 inner_gallery"><img className="img-fluid" src={delores} alt=""/>
                                        <div className="quote">
                                            <h4>Delores Reed</h4>
                                            <p>Client Service Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}