import React, { Component } from 'react';
import styled from 'styled-components';

import Auxi from '../hoc/Auxi';
import style from '../assets/style';
import { 
  GroupTutorBox,
  SearchInput,
  NavbarSigned, 
  ButtonMedium,
  Text,
} from '../components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 1000px;
  margin: 20px auto;
  margin-top: 110px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
`


export class Explore extends Component {
  render() {
    return (
      <Auxi>
        <NavbarSigned />
        <SearchInput placeholder="Search.." />
        <Container>
            <GroupTutorBox />
            <GroupTutorBox />
            <GroupTutorBox />
            <GroupTutorBox />
            <GroupTutorBox />
            <GroupTutorBox />
        </Container>
      </Auxi>
    );
  }
}

