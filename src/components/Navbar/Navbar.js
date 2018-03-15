import React, { Component } from 'react';
import styled from 'styled-components';

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
`

const RightText = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Navbar = props => {
  return (
    <Nav>
      <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleNight}>temanTutor</Text>
      <RightText>
        <Text fontSize={styles.fontSize[1]} bold color={styles.colors.skyBlue}>Buat Grup</Text>
        <Text fontSize={styles.fontSize[1]} color={styles.colors.black} opacity={0.5}>|</Text>
        <Text fontSize={styles.fontSize[1]} color={styles.colors.paleBlue}>Log in</Text>
        <Text fontSize={styles.fontSize[1]} color={styles.colors.paleBlue}>Sign up</Text>
      </RightText>
    </Nav>
  );
}