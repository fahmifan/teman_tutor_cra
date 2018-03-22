import React from 'react';
import styled from 'styled-components';
import style from '../../assets/style';

import personIcon from '../../assets/icons/person-icon.svg'

import {
  ButtonMedium,
  Text,
} from '../index';

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 260px;
  height: 330px;
  background-color: ${style.colors.white};
  border-radius: 5px;
  padding: 0;
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: ${style.space[2]}px;
  padding-right: ${style.space[2]}px;
  border-radius: 8px;
  box-shadow: 3px 3px 15px 0px rgba(136,136,136,1);
  -webkit-box-shadow: 3px 3px 15px 0px rgba(136,136,136,1);
`

const BoxImage = styled.div`
    box-sizing: border-box;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    height: 150px; 
    padding: 0;
    margin: 0;
    margin-top: 18px;
    background-color: #eee;
    background-size: cover;
    background-image: url(${props => props.img || personIcon});
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
    background-image: url(${''});
  
`
const Div = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0px;
    flex-direction: column;
    align-items: center;
    word-break:break-all;
    padding-bottom: 18px;
    justify-content: center;
`
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  color : grey;
  margin-top: 0;
  margin-bottom: 12px;
  padding: 0 15px;
`
const ProfileCard = ({name, invite, isJoined}) => {
  return (
    <Container>
      <BoxImage />
      <Div>
        <Text color={style.colors.skyBlue} bold fontSize={36}>{ name || 'John Doe'}</Text>
        <ButtonMedium onClick={invite}>Hire</ButtonMedium>
      </Div>
    </Container>    
  );
}

export default ProfileCard;