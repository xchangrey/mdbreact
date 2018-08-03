import React, { Component } from 'react';
import NavbarFeatures from './components/navbar';
import ContactPage from './components/contact';
import FeaturesPage from './components/features';
import EcommercePage from './components/best-sellers';
import VideoBackgroundPage from './components/intro';


class App extends Component {
  render() {
    return (
      <div>
        <VideoBackgroundPage />
        <FeaturesPage />
        <EcommercePage />
        <ContactPage />
      </div>
    );
  }
}

export default App;
