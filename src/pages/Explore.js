import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { operations } from '../store/ducks/group'
import axios from '../axios';
import Auxi from '../hoc/Auxi';
import style from '../assets/style';
import { 
  GroupTutorBox,
  SearchInput,
  NavbarSigned, 
  ButtonMedium,
  Text,
} from '../components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 1000px;
  margin: 0 auto ;
  margin-top: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
`

export const TemanTutorGroup = props => {
  return (
    <Container>
        <GroupTutorBox />
        <GroupTutorBox />
        <GroupTutorBox />
        <GroupTutorBox />
        <GroupTutorBox />
        <GroupTutorBox />
    </Container>      
  );
}


export class Explore extends Component {
  
  state = {
    joinedGroups: null,
  }

  componentDidMount() {
    this.props.fetchGroups();
    this.getUserGroups(this.props.userId, this.props.token);
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

  handleJoin = (groupId) => {
    console.log(`you joined group ${groupId}`);
    const  {
      token,
      userId,
    } = this.props
    
    this.props.joinGroup({groupId, token, userId})
  }

  render() {
    if(!this.props.isAuth) {
      return <Redirect to="/login" />
    }

    let groupList = <Text fontSize="24" style={{textAlign: 'center'}}>Loading...</Text>

    if(!this.props.isLoading) {
      groupList = this.props.groups.map((group, i) => (
        <GroupTutorBox
          key={group.id}
          name={group.name}
          desc={group.desc}
          join={() => this.handleJoin(group.id)}
          isJoined={
            this.state.joinedGroups !== null
            // this is still not worked. Need to figure it out 
            && this.state.joinedGroups.filter(joinedGroup => joinedGroup.id === group.id)            
          }
        />
      ));  
    }

    return (
      <Auxi>
        <NavbarSigned />
        <SearchInput placeholder="Search.." />
        <br/><br/><br/><br/>
        <Container>
          {groupList}
        </Container>
      </Auxi>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  joinGroup: val => dispatch(operations.handleJoinGroup(val)),
  fetchGroups: () => dispatch(operations.fetchGroups()),
})

const mapStateToProps = ({auth, group}) => {
    return {
      token: auth.login.user.token,
      userId: auth.login.user.id,
      isAuth: auth.login.isAuth,
      groups: group.fetchGroups.groups,
      isLoading: group.fetchGroups.isLoading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)