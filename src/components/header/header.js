import React, { Component } from 'react';
import './header.css';
import logo from  '../../imgs/header/logo.png';

export default class Header extends Component {
    render(){
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-12 col-6">
                            <div className="logo">
                                <img title="logo" className="img-fluid" src={logo} alt="MODEST"/>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-12 col-6">
                            <div className="menu">
                                <ul className="list-group list-group-horizontal">
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">ABOUT</a></li>
                                    <li><a href="#">WORK</a></li>
                                    <li><a href="#">TEAM</a></li>
                                    <li><a href="#">SERVICES</a></li>
                                    <li><a href="#">FEATURES</a></li>
                                    <li><a href="#">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
}