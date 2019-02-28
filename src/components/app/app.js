import React, { Component } from 'react';
import Header from '../header/header';
import Banner from '../banner/banner';
import About from '../about/about';
import Ourteam from '../our-team/our-team';
import Work from '../work/work';
import Services from '../services/services';
import Features from '../features/features';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

export default class App extends Component {
    render(){
      return (
          <div>
              <Header />
              <Banner />
              <About />
              <Ourteam />
              <Work />
              <Services />
              <Features />
              <Contact />
              <Footer />
          </div>
      );
    };
}