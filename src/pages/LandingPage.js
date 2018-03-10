import React, { Component } from 'react';

import Auxi from '../hoc/Auxi'; 
import { Navbar } from '../components';

export class LandingPage extends Component {
  render() {
    return (
      <Auxi>
        <Navbar />
        <h1>Landing Page</h1>    
      </Auxi>
    );
  }
}