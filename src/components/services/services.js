import React, { Component } from 'react';
import {styleTitle} from '../about/about';
import './services.css';
import cogs from  '../../imgs/services/cogs.png';
import pensil from  '../../imgs/services/pensil.png';
import mobile from  '../../imgs/services/mobile.png';
import clock from  '../../imgs/services/clock.png';
import WOW from "wowjs";



export default class Services extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }

    render(){
        return (
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 wow bounceInLeft delay-1s">
                            <h2 style={styleTitle}>what we do</h2>
                        </div>
                        <div className="col-md-3 col-6 wow slideInUp">
                            <img className="img-fluid" src={cogs} alt="cogs"/>
                            <h4>Easy theme Setup</h4>
                            <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                        </div>
                        <div className="col-md-3 col-6 wow slideInUp">
                            <img className="img-fluid" src={pensil} alt="pensil"/>
                            <h4>pixel perfect design</h4>
                            <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                        </div>
                        <div className="col-md-3 col-6 wow slideInUp">
                            <img className="img-fluid" src={mobile} alt="mobile"/>
                            <h4>responsive display</h4>
                            <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                        </div>
                        <div className="col-md-3 col-6 wow slideInUp">
                            <img className="img-fluid" src={clock} alt="clock"/>
                            <h4>24/7 support</h4>
                            <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                        </div>
                        <div className="col-md-3 col-6 wow slideInUp">
                            <img className="img-fluid" src={cogs} alt="cogs"/>
                            <h4>Easy theme Setup</h4>
                            <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                        </div>
                        <div className="col-md-3 col-6 wow slideInUp">
                            <img className="img-fluid" src={pensil} alt="pensil"/>
                            <h4>pixel perfect design</h4>
                            <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                        </div>
                        <div className="col-md-3 col-6 wow slideInUp">
                            <img className="img-fluid" src={mobile} alt="mobile"/>
                            <h4>responsive display</h4>
                            <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                        </div>
                        <div className="col-md-3 col-6 wow slideInUp">
                            <img className="img-fluid" src={clock} alt="clock"/>
                            <h4>24/7 support</h4>
                            <p>Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}