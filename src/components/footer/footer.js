import React, { Component } from 'react';
import {styleTitle} from '../about/about';
import './footer.css';
import WOW from "wowjs";



export default class Footer extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }

    render(){
        return (
            <footer className="wow slideInLeft delay-1s">
                <div className="container">
                    <div className="row">
                        <div className="col-12 wow bounceInRight delay-2s"><p>© Copyright 2019 by PSD Booster. All Rights Reserved.</p></div>
                    </div>
                </div>
            </footer>
        );
    };
}
