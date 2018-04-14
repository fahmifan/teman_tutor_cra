import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import axios from '../../axios';
import style from '../../assets/style';

import { 
  NavbarSigned,
  Background,
} from '../../components';
import {GroupCard} from './LeftContent';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';
import Auxi from '../../hoc/Auxi';

const Left = styled.div`
  box-sizing: border-box;
  width: 265px;
  padding-top: 30px;
  background: linear-gradient(180deg, #03256C -24.11%, #2541B2 100%);
`

const Middle = styled.div`
  box-sizing: border-box;
  width: 524px;
`

const Right = styled.div`
  box-sizing: border-box;
  width: 238px;
  background-color: rgba(86,204,242,0.05);
`

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-between;
  z-index: 1; 
`

export class Home extends Component {

  state = {
    joinedGroups: null,
    messages: [],
    groupIdClicked: null,
  }

  getUserGroups = (userId, token) => {
    axios({
      url: `/users/${userId}/groups`,
      method: 'GET',
      headers: {
        'remember_token': token,
      }
    })
    .then(response => {
      console.log("joinedGroups", response.data)
      this.setState({
        joinedGroups: [...response.data],
      })
    })
    .catch(error => {

    })
  }
  
  componentDidMount() {
    const {
      userId,
      token,
    } = this.props
    
    this.getUserGroups(userId, token);
  }
  
  fetchGroupChat = (userId, groupId) => {
    axios({
      url: `/groups/${groupId}/message`,
      method: 'GET',
    })
    .then(res => {
      this.setState({messages: res.data})
    })
  }

  onGroupCardClicked = (userId, groupId) => {
    this.setState({groupIdClicked: groupId});
    this.fetchGroupChat(userId, groupId);
  }

  render() {  
    const { userId, isAuth } = this.props;
    const { groupIdClicked } = this.state;
    const { fetchGroupChat } = this;

    if(!isAuth) {
      return <Redirect to="/login" />
    }

    let groups = null;
    if(this.state.joinedGroups !== null) {
      groups = this.state.joinedGroups.map(group => {
        return <GroupCard 
          key={group.id}
          name={group.name}
          desc={group.desc}
          clicked={() => this.onGroupCardClicked(userId, group.id)} />
      })
    }

    return (
      <Auxi>
        <NavbarSigned />
        <Background paddingNul>
          <Container>
            <Left>
              {groups}
            </Left>
            <Middle>
              <MiddleContent fetchGroupChat={fetchGroupChat} messages={this.state.messages} userId={userId} groupId={groupIdClicked} />
            </Middle>
            <Right>
              <RightContent />
            </Right>
          </Container>
        </Background>
      </Auxi>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  userId: auth.login.user.id,
  token: auth.login.user.token,
  isAuth: auth.login.isAuth,
})

export default connect(mapStateToProps, null)(Home);