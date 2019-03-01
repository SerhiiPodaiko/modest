import React, { Component } from 'react';
import {styleTitle} from '../about/about';
import './contact.css';
import SimpleMap from '../map/map';
import WOW from "wowjs";


export default class Contact extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }

    render(){
        return (
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={styleTitle}>stay in touch</h2>
                        </div>
                    </div>
                </div>
                        <div className="container-fluid wow fadeInUp delay-1s">
                            <SimpleMap />
                        </div>

                         <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact_info wow fadeInUp">
                                        <h4>contact information</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique nec dolor non, ornare sagittis dolor. Nulla vestibulum lacus sed molestie gravida.</p>
                                        <p>Cras fermentum elit quis magna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis dapibus lacus </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form wow fadeInRightBig delay-1s">
                                        <form>

                                            <div className="name_email">
                                                <div className="col name"><p>YOUR NAME</p><input type="text"/></div>
                                                <div className="col email"><p>YOUR EMAIL</p><input type="text"/></div>
                                            </div>

                                            <div className="message">
                                                <p>YOUR MESSAGE</p><input type="text"/>
                                            </div>

                                            <div className="btn_send">
                                                <a href="#">SEND MESSAGE</a>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        );
    };
}
