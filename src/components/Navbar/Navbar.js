import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import styles from '../../assets/style';
import { Text } from '../index';

const Nav = styled.nav`
  height: 68px;
  background-color: ${styles.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${styles.space[2]}px;
  padding-right: ${styles.space[2]}px;
  box-shadow: 0px 4px 4px rgba(68,68,68,0.6);
  z-index: 2;
  a {
    text-decoration: none;
  }
`

const RightText = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Navbar = props => {
  return (
    <Nav>
      <Link to="/">
        <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleNight}>temanTutor</Text>
      </Link>
      <RightText>
        <Link to="/buatgrup">
          <Text fontSize={styles.fontSize[1]} bold color={styles.colors.skyBlue}>Buat Grup</Text>
        </Link>
        <Text fontSize={styles.fontSize[1]} color={styles.colors.black} opacity={0.5}>|</Text>
        <Link to="/login">
          <Text fontSize={styles.fontSize[1]} color={styles.colors.paleBlue}>Log in</Text>
        </Link>
        <Link to="/signup">
          <Text fontSize={styles.fontSize[1]} color={styles.colors.paleBlue}>Sign up</Text>
        </Link>
      </RightText>
    </Nav>
  );
}