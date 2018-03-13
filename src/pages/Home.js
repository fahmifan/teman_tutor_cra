import React, { Component } from 'react';

import { NavbarSigned } from '../components';
import Auxi from '../hoc/Auxi';

export class Home extends Component {
  render() {
    return (
      <Auxi>
        <NavbarSigned />
        <p>Home</p>
      </Auxi>
    );
  }
} 