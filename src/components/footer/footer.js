import React, { Component } from 'react';
import {styleTitle} from '../about/about';
import './footer.css';



export default class Footer extends Component {

    render(){
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12"><p>© Copyright 2019 by PSD Booster. All Rights Reserved.</p></div>
                    </div>
                </div>
            </footer>
        );
    };
}
