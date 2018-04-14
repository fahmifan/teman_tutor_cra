import React, { Component } from 'react';
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
  width: 150px;
  height: 200px;
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

const ButtonJoin = ButtonMedium.extend`
  height: 50px;
  margin-top: 0;
  width: 100%;
  ${({isInvited}) => isInvited === true ? `
    background-color: rgba(0,0,0,0);
    border: 1px solid green;
    color: green;
    ` : null }
`

class ProfileCard extends Component {
  state = {
    isInvited: false,
  }

  setInvited = () => {this.setState({isInvited: !this.state.isInvited})}

  render() {
    const { name, invite, isJoined } = this.props
    const { isInvited } = this.state

    if(invite) {

    }

    return (
      <Container>
        <BoxImage />
        <Div>
          <Text color={style.colors.skyBlue} bold fontSize={18}>{ name || 'John Doe'}</Text>
          <ButtonJoin isInvited={isInvited} onMouseDown={this.setInvited} onClick={invite} type="button" >{isInvited ? 'Invited':'Invite'}</ButtonJoin>
        </Div>
      </Container>    
    );
  }
}

export default ProfileCard;