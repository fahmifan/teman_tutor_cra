import React, { Component } from 'react';
import styled from 'styled-components';
import Pusher from 'pusher-js';

import axios from '../../axios';
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
  max-width: 330px;
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
  background-color: #fbfbfb;
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

const UserMessage = ({message, position}) => {
  return (
    <Auxi>
      <MessageContainer position={position}>
        <Message>
          <Text fontSize={14}>
            {message ||'No Message Yet'} 
          </Text>
        </Message>
      </MessageContainer>
      <MessageContainer position={position}>
        <User>
          <UserIcon /><Text fontSize={12}>You</Text>
        </User>
      </MessageContainer>
    </Auxi>  
)};

const pusherCreds = {
  APP_KEY: '64b6dd6309c94469b313',
  APP_CLUSTER: 'ap1',
};

class MiddleContent extends Component {
  state = {
    messageInput: '',
  }

  componentDidMount() {
    const pusher = new Pusher(pusherCreds.APP_KEY, {
      cluster: pusherCreds.APP_CLUSTER,
      encrypted: true,
    });

    const channel = pusher.subscribe('chat');
  }

  onSendMessage = (userId, groupId, message) => {
    axios({
      url: `/groups/${groupId}/message`,
      method: 'POST',
      data: {
        "user_id": userId,
        "group_id": groupId,
        "message": message,
      } 
    })
    .then(res => {
      const {messageInput} = this.state;
      this.setState({messageInput: ''});
      console.log(this.sate.messageInput);
      this.props.fetchGroupChat(userId, groupId);
    })
    .catch(error => console.log(error));
  } 
  
  onInputMessageChange = (event) => {
    this.setState({messageInput: event.target.value})
  }

  render() {
    const { messages, groupId, userId } = this.props; 
    const { onSendMessage, onInputMessageChange } = this;
    const { messageInput } = this.state;

    let userMessages = null;
    if(messages !== null) {
      userMessages = messages.map(({ message }) => {
        return <UserMessage 
          position="right"
          message={message}
        />
      })
    }

    return (
      <MainContainer>
        <MessageList>
          {userMessages}
        </MessageList>
        <InputContainer>
          <InputMessage value={messageInput} onChange={(event) => onInputMessageChange(event)} placeholder="write something" />
          <SendButton onClick={() => onSendMessage(userId, groupId, messageInput)}>SEND</SendButton>
        </InputContainer>
      </MainContainer>
    )
  }
}

export default MiddleContent;
