import React, { Component } from 'react';
import styled from 'styled-components';

import styles from '../../assets/style';
import { ButtonMedium } from '../index';
import { Text } from '../index';
import GroupTutorBoxImage from '../../assets/icons/GroupTutorBoxImage.jpg';
import TemanTutorLogos2 from '../../assets/icons/TemanTutorLogos2.png';

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 260px;
  height: 330px;
  background-color: ${styles.colors.white};
  border-radius: 5px;
  padding: 0;
  margin: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${styles.space[2]}px;
  padding-right: ${styles.space[2]}px;
`

const BoxImage = styled.div`
    width: 260px;
    height: 110px; 
    padding: 0;
    margin: 0;
    background-size: cover;
    background-image: url(${GroupTutorBoxImage});
    border-radius: 5px 5px 0px 0px;
`
const BoxIcon = styled.div`
    position: absolute;
    border-radius: 5px;
    top: 70px;
    width: 70px;
    height: 70px; 
    margin: 0 auto;
    background-position: center;
    background-size: cover;
    background-image: url(${TemanTutorLogos2});
  
`
const Div = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    padding: 0px;
    flex-direction: column;
    align-items: center;
    word-break:break-all;
`
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  color : grey;
  margin-top: 0;
  margin-bottom: 12px;
  padding: 0 15px;
`
export const GroupTutorBox = ({name, desc, join}) => {
  return (
    <Container>
      <BoxImage />
      <BoxIcon />
      <Div>
        <Text color={styles.colors.skyBlue} bold fontSize={20}>{ name || 'Teman Tutor Group'}</Text>
        <Title>{ desc || 'Discussion about teman tutor vision for better community'}</Title>
        <ButtonMedium onClick={join}>Join</ButtonMedium>
      </Div>
    </Container>    
      
  );
}