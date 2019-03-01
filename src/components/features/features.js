import React, { Component } from 'react';
import {styleTitle} from '../about/about';
import './features.css';
import icon_one from  '../../imgs/features/icon_one.png';
import icon_two from  '../../imgs/features/icon_two.png';
import icon_three from  '../../imgs/features/icon_three.png';
import WOW from "wowjs";

export default class Features extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }

    render(){
        return (
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-12 wow bounceInLeft delay-1s">
                            <h2 style={styleTitle}>features</h2>
                        </div>
                        <div className="col-4 wow slideInUp"><img className="img-fluid" src={icon_one} alt=""/></div>
                        <div className="col-4 wow slideInUp"><img className="img-fluid" src={icon_two} alt=""/></div>
                        <div className="col-4 wow slideInUp"><img className="img-fluid" src={icon_three} alt=""/></div>
                        <div className="col-4 wow slideInUp">
                            <h4>Product Design: Eames Chairs</h4>
                            <p>Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.</p>
                        </div>
                        <div className="col-4 wow slideInUp">
                            <h4>Elegant and Colorful Logos</h4>
                            <p>I’ve always found logo design to be one of the most challenging things to get right. There’s so much that a logo can say about a brand without actually saying it.</p>
                        </div>
                        <div className="col-4 wow slideInUp">
                            <h4>A Showcase of Creative</h4>
                            <p>It’s always interesting to see another designer’s take on a famous website, app or even physical product. Different designers add their own personality and style.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}