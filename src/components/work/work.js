import React, { Component } from 'react';
import {styleTitle} from '../about/about';
import './work.css';
import icon_one from  '../../imgs/work/icon-one.png';
import icon_two from  '../../imgs/work/icon-two.png';
import icon_three from  '../../imgs/work/icon-three.png';
import icon_four from  '../../imgs/work/icon-four.png';
import icon_fife from '../../imgs/work/icon-fife.png';
import icon_six from  '../../imgs/work/icon-six.png';
import WOW from "wowjs";


export default class Work extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }

    render(){
        return (
            <div className="work">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 style={styleTitle}>lovely work.</h2>
                        </div>
                        <div style={{marginTop: '40px'}} className="col-md-4 col-12 wow bounceInLeft delay-1s"><img className="img-fluid hide" src={icon_one} alt=""/><div className="partner"><p>partnership guidlines</p></div></div>
                        <div style={{marginTop: '40px'}} className="col-md-4 col-12 wow bounceInDown delay-2s"><img className="img-fluid hide" src={icon_two} alt=""/></div>
                        <div style={{marginTop: '40px'}} className="col-md-4 col-12 wow bounceInRight delay-1s"><img className="img-fluid hide" src={icon_three} alt=""/></div>
                        <div style={{marginTop: '20px'}} className="col-md-4 col-12 wow bounceInLeft delay-1s"><img className="img-fluid hide" src={icon_four} alt=""/></div>
                        <div style={{marginTop: '20px'}} className="col-md-4 col-12 wow bounceInUp delay-2s"><img className="img-fluid hide" src={icon_fife} alt=""/></div>
                        <div style={{marginTop: '20px'}} className="col-md-4 col-12 wow bounceInRight delay-1s last_m"><img className="img-fluid hide" src={icon_six} alt=""/></div>
                    </div>
                    <div className="offset-md-5 col-md-2">
                        <a href="#">show me more</a>
                    </div>
                </div>
            </div>
        );
    };
}