import React, { Component } from 'react';
import './banner.css';
import bg_banner from  '../../imgs/banner/bg_banner.jpg';
import WOW from "wowjs";


export default class Banner extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }

    render(){
        return (
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="info_banner">
                                <h1 className="wow bounceInLeft delay-1s">welcome to our marketplace</h1>
                                <p className="wow bounceInRight delay-1s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor <br/>
                                     non, ornare sagittis dolor. Nulla vestibulu lacus ...</p>
                            </div>
                            <div className="btn">
                                <a className="wow bounceInUp delay-2s" href="#">VIEW MORE</a>
                                <a className="wow bounceInRight delay-2s" href="#">VIDEO TOUR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}