import React, { Component } from 'react';
import styled from 'styled-components';

import styles from '../../assets/style';
import { Text } from '../index';
import clockIcon from '../../assets/icons/clock.png';
import teleskopIcon from '../../assets/icons/teleskop.png';
import houseIcon from '../../assets/icons/house.png';

const Nav = styled.nav`
  height: 68px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: ${styles.colors.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: ${styles.space[2]}px;
  padding-right: ${styles.space[2]}px;
`

const NavIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 400px;
`

const NavIcon = styled.div`
  width: 150px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-top: 7px solid rgba(0,0,0,0);
  border-bottom: 7px solid rgba(0,0,0,0);
  border-radius: 0;
  &:hover {
    box-sizing: border-box;
    cursor: pointer;
    border-bottom: 7px solid #03256C;
    height: 68px;
  }
`

const RightText = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Container = styled.div`

`

export const NavbarSigned = props => {
  return (
    <Nav>
      <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleNight}>temanTutor</Text>
      <NavIconContainer>
        <NavIcon>
          <img src={houseIcon} />
          <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleBlue}>Home</Text>
        </NavIcon>
        <NavIcon>
          <img src={teleskopIcon} />
          <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleBlue}>Explore</Text>
        </NavIcon>
        <NavIcon>
          <img src={clockIcon} />
          <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleBlue}>Timeline</Text>
        </NavIcon>
      </NavIconContainer>
      <RightText>
        <Text bold color={styles.colors.skyBlue}>Buat Grup</Text>
        <Text color={styles.colors.black} opacity={0.5}>|</Text>
        <Text color={styles.colors.paleBlue}>Log in</Text>
        <Text color={styles.colors.paleBlue}>Sign up</Text>
      </RightText>
    </Nav>
  );
}