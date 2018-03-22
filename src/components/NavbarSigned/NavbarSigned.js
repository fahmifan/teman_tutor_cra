import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { operations } from '../../store/ducks/auth';
import styles from '../../assets/style';
import { Text, ButtonWide, ButtonSmall } from '../index';
import clockIcon from '../../assets/icons/clock-icon.svg';
import teleskopIcon from '../../assets/icons/teleskop-icon.svg';
import houseIcon from '../../assets/icons/house-icon.svg';
import bellIcon from  '../../assets/icons/bell-icon.svg';

const Nav = styled.nav`
  height: 68px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: ${styles.colors.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: ${styles.space[2]}px;
  padding-right: ${styles.space[2]}px;
  box-shadow: 0px 4px 4px rgba(68,68,68,0.6);
  position: relative;
  z-index: 99;
  a {
    text-decoration: none;
  }
`

const NavIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 400px;
`

const NavIcon = styled.div`
  width: 150px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-top: 7px solid rgba(0,0,0,0);
  border-bottom: 7px solid rgba(0,0,0,0);
  border-radius: 0;
  &:hover {
    box-sizing: border-box;
    cursor: pointer;
    border-bottom: 7px solid #03256C;
    height: 68px;
  }
`

const RightText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Profile = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid #333;
  border-radius: 100%;
  text-align: center;
  margin-left: 8px;
  &:hover {
    cursor: pointer;
  }
`

const ProfileContainer = styled.div`
  box-sizing: border-box;
  width: 236px;
  height: 71px;
  background-color: #F2F2F2;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
  border-bottom: 1px solid #eee;
`

const NotifContainer = styled.div`
  margin-top: 68px;
  box-sizing: border-box;
  position: fixed;
  right: 0;
  z-index: 3;
  margin-right: 30px;
  box-shadow: 0px 2px 5px rgba(68,68,68,0.6);
`

export class NavbarSigned extends Component {

  state = {
    showProfile: false,
  }

  handleProfileClicked = () => {
    this.setState({showProfile: !this.state.showProfile})
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { profileClicked } = this.props;
    const { showProfile } = this.state;

    return (
      <Nav>
        <Link to="/explore">
          <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleNight}>temanTutor</Text>
        </Link>
        <NavIconContainer>
          <Link to="/home">
            <NavIcon>
              <img src={houseIcon} />
              <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleBlue}>Home</Text>
            </NavIcon>
          </Link>
          <Link to="/explore">
            <NavIcon>
              <img src={teleskopIcon} />
              <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleBlue}>Explore</Text>
            </NavIcon>
          </Link>
          <Link to="/timeline">
            <NavIcon>
              <img src={clockIcon} />
              <Text bold fontSize={styles.fontSize[2]} color={styles.colors.paleBlue}>Timeline</Text>
            </NavIcon>
          </Link>
        </NavIconContainer>
        <RightText>
          <img src={bellIcon} />
          <Link to="/buatgrup">
            <Text bold color={styles.colors.skyBlue} fontSize={styles.fontSize[1]} >Buat Grup</Text>
          </Link>
          <Profile onClick={this.handleProfileClicked} ><span>J</span></Profile>
          {
            showProfile && <NotifContainer> 
              <ProfileContainer>
                <ButtonSmall onClick={this.handleLogout} fontSize={24} >Logout</ButtonSmall>
              </ProfileContainer>
            </NotifContainer>
          }
        </RightText>
      </Nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(operations.logout()),
})

export default connect(null, mapDispatchToProps)(NavbarSigned);