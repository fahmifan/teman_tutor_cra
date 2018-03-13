import React, { Component } from 'react';
import styled from 'styled-components';

import Auxi from '../hoc/Auxi';
import { Navbar, Input, Text, ButtonWide } from '../components';
import style from '../assets/style';

const Container = styled.div`
  box-sizing: border-box;
  width: 450px;
  height: 485px;
  background-color: ${style.colors.white};
  margin: 0 auto;
  margin-top: 64px;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export class SignUp extends Component {
  render() {
    return (
      <Auxi>
        <Navbar />
        <Container>
          <Text color={style.colors.black} bold fontSize={36}>Sign up</Text>
          <Input placeholder="Nama depan"/>
          <Input placeholder="Nama belakang"/>
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
          <Input placeholder="Confirm password"/>
          <ButtonWide>Log in</ButtonWide>
        </Container>
      </Auxi>
    );
  }
};