import React from 'react';
import styled from 'styled-components';

import style from '../../assets/style';
import { Text } from '../Text/Text';

const Container = styled.div`
  box-sizing: border-box;
  width: 236px;
  height: 71px;
  position: absolute;
  right: 0;
  margin-right: 30px;
  background-color: #F2F2F2;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: 0px 2px 5px rgba(68,68,68,0.6);
  z-index: 1;
`

const BtnSmall = styled.button`
  box-sizing: border-box;
  border: none;
  width: 60px;
  height: 25px;
  border-radius: 5px;
  background-color: ${props => props.color || '#2296F3'};
  color: ${style.colors.white};
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 10px;
  margin-right: 20px;
`

export const NotifCard = props => (
  <Container>
    <Text bold>John Doe mengundang anda sebagai tutor</Text>
    <Text>24, Maret 2018</Text>
    <BtnSmall>Accept</BtnSmall>
  </Container>
);