import React from 'react';
import styled from 'styled-components';

import style from '../../assets/style';
import Auxi from '../../hoc/Auxi';
import {Text} from '../../components'

const MainContainer = styled.div`
  box-sizing: border-box;
  padding-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
  height: 100vh;
  width: 100%;
  position: relative;
  display: block;
`

export const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  ${props => props.left && 'justify-content: flex-start;' }
  ${props => props.right && 'justify-content: flex-end;' }
`

export const Message = styled.div`
  width: 330px;
  background: linear-gradient(112.02deg, rgba(238, 238, 238, 0.5) 6.3%, #EEEEEE 62.97%);
  border-radius: 10px;
`

const SendButton = styled.button`
  border: none;
  background-color: rgba(0,0,0,0);
  color: #2541B2;
  font-weight: 700;
  align-self: flex-end;
  font-family: 'Roboto', sans-serif;
  font-size: ${style.fontSize[1]}px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
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

const MiddleContent = props => (
  <MainContainer>
    <MessageContainer right>
      <Message>
        <Text>
          test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat lima enam  tujuh 
        </Text>
      </Message>
    </MessageContainer>
    <MessageContainer left>
      <Message>
        <Text>
          test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat lima enam  tujuh 
          test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat test satu dua tiga empat lima enam  tujuh delapan sembilan sepuluh 123 456&^*@)!).,’ test satu dua tiga empat lima enam  tujuh 
        </Text>
      </Message>
      </MessageContainer>
    <InputContainer>
      <InputMessage placeholder="write something" />
      <SendButton>SEND</SendButton>
    </InputContainer>
  </MainContainer>
);

export default MiddleContent;
