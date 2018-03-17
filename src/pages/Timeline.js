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
  NotifCard,
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

const NotifContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  right: 0;
  z-index: 3;
  margin-right: 30px;
  box-shadow: 0px 2px 5px rgba(68,68,68,0.6);
`

export class Timeline extends Component {
  render() {
    return (
      <Auxi>
        <NavbarSigned />
        <NotifContainer>
          <NotifCard />
          <NotifCard />
          <NotifCard />
        </NotifContainer>
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

