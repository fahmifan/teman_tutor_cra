import React from 'react';
import styled from 'styled-components';

import style from '../../assets/style';
import { ButtonSmall, Text } from '../index';

const Container = styled.div`
  box-sizing: border-box;
  width: 236px;
  height: 71px;
  background-color: #F2F2F2;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
  border-bottom: 1px solid #eee;
`

export const NotifCard = props => (
  <Container>
    <Text bold>John Doe mengundang anda sebagai tutor</Text>
    <Text>24, Maret 2018</Text>
    <ButtonSmall>Accept</ButtonSmall>
  </Container>
);