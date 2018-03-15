import React, { Component } from 'react';
import styled from 'styled-components';

import Auxi from '../hoc/Auxi';
import style from '../assets/style';
import { 
  NavbarSigned, 
  Eventlog, 
  Background,
  Timelog,
  ButtonWide,
  Text,
} from '../components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 632px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 50;
  position: relative;
`

const Line = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  background-color: #BDBDBD;
  margin-bottom: 20px; 
`

export class Timeline extends Component {
  render() {
    return (
      <Auxi>
        <NavbarSigned />
        <Background>
          <Main>
            <ButtonWide width={195} color={style.colors.paleBlue} selfEnd timeline shadow>Buat agenda</ButtonWide>
            <Text timeline fontSize={style.fontSize[2]} color={style.colors.black} >Maret</Text>
            <Line />
            <Timelog />
            <Timelog />
            <Timelog highlighted={true} />
            <Timelog />
          </Main>
        </Background>
      </Auxi>
    );
  }
}

