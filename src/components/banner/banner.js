import React, { Component } from 'react';
import './banner.css';
import bg_banner from  '../../imgs/banner/bg_banner.jpg';


export default class Banner extends Component {
    render(){
        return (
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="info_banner">
                                <h1>welcome to our marketplace</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor <br/>
                                     non, ornare sagittis dolor. Nulla vestibulu lacus ...</p>
                            </div>
                            <div className="btn">
                                <a href="#">VIEW MORE</a>
                                <a href="#">VIDEO TOUR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}