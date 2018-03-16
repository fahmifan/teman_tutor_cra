import React from 'react';
import styled from 'styled-components';

import style from '../../assets/style';
import Auxi from '../../hoc/Auxi';
import {Text} from '../../components'

const MainContainer = styled.div`
  box-sizing: border-box;
  padding-top: 30px;
  padding-left: 0px;
  padding-right: 0px;
  height: 90vh;
  width: 100%;
  position: relative;
  display: block;
`

const UserIcon = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #f2f2f2;
`

const User = styled.div`
  display: flex;
  align-items: center;
`

const MessageList = styled.div`
  height: 482px;
  overflow-y: auto;
  padding-left: 10px;
  padding-right: 10px;
`

export const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  ${props => props.position == 'left' && 'justify-content: flex-start;' }
  ${props => props.position == 'right' && 'justify-content: flex-end;' }
`

export const Message = styled.div`
  width: 330px;
  background: linear-gradient(112.02deg, rgba(238, 238, 238, 0.5) 6.3%, #EEEEEE 62.97%);
  border-radius: 10px;
  padding: 5px;
`

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
  background-color: #fbfbfb;
`

export const InputMessage = styled.input`
  width: 483px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #2541B2;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
` 

const SendButton = styled.button`
  border: none;
  background-color: #fbfbfb;
  color: #2541B2;
  font-weight: 700;
  align-self: flex-end;
  font-family: 'Roboto', sans-serif;
  font-size: ${style.fontSize[1]}px;
`

const UserMessage = props => (
  <Auxi>
    <MessageContainer position={props.position}>
      <Message>
        <Text fontSize={14}>
          test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat lima enam  tujuh 
        </Text>
      </Message>
    </MessageContainer>
    <MessageContainer position={props.position}>
      <User>
        <UserIcon /><Text fontSize={12}>You</Text>
      </User>
    </MessageContainer>
  </Auxi>  
);

const MiddleContent = props => (
  <MainContainer>
    <MessageList>
      <UserMessage position="right"/>
      <UserMessage position="left"/>
      <UserMessage position="right"/>
      <UserMessage position="right"/>
    </MessageList>
    <InputContainer>
      <InputMessage placeholder="write something" />
      <SendButton>SEND</SendButton>
    </InputContainer>
  </MainContainer>
);

export default MiddleContent;
