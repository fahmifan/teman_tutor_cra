import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Auxi from '../hoc/Auxi';
import style from '../assets/style';
import { 
  NavbarSigned, 
  Eventlog, 
  Background,
  Timelog,
  ButtonWide,
  Text,
  NotifCard,
    Input,
  InputSmall,    
  FormSmall,
} from '../components';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0',
    borderRadius          : '8px' ,
    boxShadow: '3px 3px 15px 0px rgba(136,136,136,1)' ,
  }
   
};



const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 632px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 50;
  position: relative;
`

const Line = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  background-color: #BDBDBD;
  margin-bottom: 20px; 
`

const NotifContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  right: 0;
  z-index: 3;
  margin-right: 30px;
  box-shadow: 0px 2px 5px rgba(68,68,68,0.6);
`
const ModalContainer = styled.div`
    width: 470px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
`

const H2 = styled.h2`
    color: ${style.colors.skyBlue};

`

const XButton = styled.button`
    border: none;
    width: 40px;
    height: 30px;
    background-color: ${style.colors.white};
    margin 0;  
    pading: 0;
    position: absolute;
    right: 0;
    top: 0;
    color: rgba( 1, 1, 1, 0.7);
    &:hover {
        cursor: pointer;
        background-color: rgba(136 , 136 , 136 , 0.3);
    }
    font-size: 17px;
`
const TimeInput = styled.div`
    width: 100%;
    height: wrap-content;
    margin: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const P = styled.p`
    margin: 0 10px;
    font-size: 11;
    color: rgba( 1, 1, 1, 0.8);
`

const ButtonModal = styled.button`  
  box-sizing: border-box;
  border:none;
  border-radius: 5px;
  background-color: ${style.colors.skyBlue};
  height: 40px;
  width:  160px;
  margin-top: 100px;
  color: ${style.colors.white};
  font-size: ${style.fontSize[1]}px;
  margin-top: ${style.space[2]}px;
  font-weight: 700;
  outline: none;
  ${props => props.selfEnd && 'align-self: flex-end;'}
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export class Timeline extends Component {
    
    constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
    
  render() {
    const {isAuth} = this.props;

    if(!isAuth) {
      return <Redirect to="/login" />
    }

    return (
      <Auxi>
        <NavbarSigned />
        <NotifContainer>
          <NotifCard />
          <NotifCard />
          <NotifCard />
        </NotifContainer>
        <Background>
          <Main>
                <div>
                    <ButtonWide onClick={this.openModal} width={195} color={style.colors.paleBlue} selfEnd timeline shadow>Buat agenda</ButtonWide>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                    <ModalContainer>
                        <XButton onClick={this.closeModal}>x</XButton>
                        <H2 >Buat Agenda</H2> 
                        <FormSmall>
                            <InputSmall placeholder="Place"/> 
                            <TimeInput>
                                <input type="datetime-local" />
                                <P>sampai</P>
                                <input type="time" />
                            </TimeInput>
                            <InputSmall placeholder="Subject"/> 
                            <ButtonModal>Buat</ButtonModal>
                        </FormSmall>
                        <h2  ref={subtitle => this.subtitle = subtitle} ></h2>
                    </ModalContainer>
                    </Modal>
                </div>
                
            <Text timeline fontSize={style.fontSize[2]} color={style.colors.black} >Maret</Text>
            <Line />
            <Timelog />
            <Timelog />
            <Timelog highlighted={true} />
            <Timelog />
          </Main>
        </Background>
      </Auxi>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  isAuth: auth.login.isAuth,
})

export default connect(mapStateToProps)(Timeline)