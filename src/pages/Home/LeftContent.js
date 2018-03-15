import React from 'react';
import styled from 'styled-components';

import {Text} from '../../components';
import personIcon from '../../assets/icons/person-icon.svg';
import style from '../../assets/style';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  border-left: 5px solid rgba(251,251,251,0);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  &:hover {
    cursor: pointer;
    background-color: #03256C;
    border-left: 5px solid rgba(251,251,251,1);
  }
`

const ProfilPic = styled.div`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  background: #fbfbfb;
  border-radius: 5px;
  margin-left: 3px;
`

const Status = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.row || 'column'};
  align-items: flex-start;
  justify-content: center;
  margin-left: ${props => props.ml || 2}px;
`

export const GroupCard = props => (
  <Container>
    <ProfilPic />
    <Status ml={'8'}>
      <Text bold padding="2" color={style.colors.white} fontSize={style.fontSize[1]} >Group Belajar</Text>
      <Status row ml={'2'}>
        <img src={personIcon}/>
        <Text bold padding="2" color={style.colors.white} fontSize={style.fontSize[0]} >60</Text>
      </Status>
    </Status>
  </Container>
);