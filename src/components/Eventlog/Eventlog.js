import React from 'react';
import styled from 'styled-components';

import style from '../../assets/style'; 
import {Text} from '../Text/Text';

export const Eventlog = styled.div`
  box-sizing: border-box;
  width: 560px;
  height: 75px;
  background-color: rgba(86,204,242,0.15);
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Datelog = styled.div`
  box-sizing: border-box;
  width: 80px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => props.highlighted && `border-left: 5px solid rgba(86,204,242,0.5);`}
  justify-content: center;
`

const Container = styled.div`
  box-sizing: border-box;
  padding-left: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const Timelog = props => (
  <Container>
    <Datelog highlighted={props.highlighted}>
      <Text padding="0px" fontSize={style.fontSize[2]} >8</Text>
      <Text fontSize={style.fontSize[0]} >Jum</Text>
    </Datelog>
    <Eventlog>
      <Text padding={5} bold fontSize={style.fontSize[1]} >Meetup OSN Matematika</Text>
      <Text padding={5} fontSize={style.fontSize[0]} >10:00 - 12:00</Text>
    </Eventlog>
  </Container>
);