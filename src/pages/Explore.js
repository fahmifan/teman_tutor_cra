import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 1000px;
  margin: 20px auto;
  margin-top: 110px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
`

export class Explore extends Component {
  
  state = {
    groups: [],
    loading: false,
  }

  componentDidMount() {
    this.fetchGroups();
  }

  fetchGroups = () => {
    this.setState({loading: true})
    axios({
      url: '/groups',
      method: 'GET',
    })
    .then(response => {
      this.setState({
        loading: false,
        groups: response.data
      })
    })
  }

  handleJoin = (id) => {
    console.log(`you joined group ${id}`);
    axios({
      url: `/groups/${id}/${4}`,
      method: 'POST',
      data: {
        // 'group_id': id,
        // 'user_id': this.props.userId,        
        "group_id": 1,
        "user_id": 4,
        "token": 'h4GfDlYvSlNigJBUb76JZLx7ZbD06LtAco01BhKVXNaN5KN5MQMdN1dfwzuk',
      }
    })
  }

  render() {
    let groupList = <Text fontSize="24" style={{textAlign: 'center'}}>Loading...</Text>

    if(!this.state.loading) {
      groupList = this.state.groups.map(group => (
        <GroupTutorBox
          key={group.id}
          name={group.name}
          desc={group.desc}
          join={() => this.handleJoin(group.id)}
        />
      ));  
    }

    return (
      <Auxi>
        <NavbarSigned />
        <SearchInput placeholder="Search.." />
        <Container>
          {groupList}
        </Container>
      </Auxi>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {
    token: auth.user.token,
    userId: auth.user.id,
    isAuth: auth.user.token !== null,
  }
}

export default connect(mapStateToProps, null)(Explore)