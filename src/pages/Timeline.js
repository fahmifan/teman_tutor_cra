import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Select from 'react-virtualized-select';
import styled from 'styled-components';
import { withFormik } from 'formik';

import axios from '../axios';
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
  ProfileCard,
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
    width: 700px;
    height: 100%;
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
    margin: 0;  
    padding: 0;
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
	margin-left: 100px;
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
            modalIsOpen: false,
            fetchFinished: false,
            availableTutors: null,
            error: null,
            isLoading: false,
            selectedCourse: null,
            courses: null,
            fetchCourseError: null,
            selectedTutor: null,
            groups: null,
            selectedGroup: null,
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

  fetchTutors = (course_id) => {
    this.setState({isLoading: true})
    axios.get(`/courses/${course_id}/tutors`)
    .then(response => {
        this.setState({isLoading: false})
        console.log("Fetch success", response.data)
        this.setState({availableTutors: response.data})
    })
    .catch(error => {
        this.setState({isLoading: false})
        console.log("Fetch error", error)
        this.setState({error: error})
    })
  }
    
  componentDidMount() {
    this.fetchTutors();
    this.fetchGroups()
    this.fetchOptions();
  }

  _handleSelect = (selectChoice) => {
    if(selectChoice.value !== null) {
        this.setState({selectedTutor: null})
        this.props.setFieldValue('course_id', selectChoice.value);
        this.fetchTutors(selectChoice.value);
    }
    this.setState({selectedCourse: selectChoice.value})
  };

  fetchGroups = () => {
      this.setState({isLoading: true})
      axios({
        url: `/users/${this.props.userId}/groups`,
        method: 'GET',
        headers: {
            'remember_token': this.props.token,
        }
      })
      .then(response => {
          console.log(response.data);
          this.setState({groups: response.data, isLoading: false, error: null})
      })
      .catch(error => {
          console.log(error)
          this.setState({error: error, isLoading: false})
      })
  }

  fetchOptions = () => {
    this.setState({isLoading: true})
    axios({
      url: '/courses',
      method: 'GET',
    })
    .then(response => {
      this.setState({courses: [...response.data], isLoading: false, fetchCourseError: null})
      console.log(response.data)
    })
    .catch(error => this.setState({fetchCourseError: error, isLoading: false}))
  }

  handleInviteTutor = (id) => {
    this.setState({selectedTutor: id})
    this.props.setFieldValue('tutor_id', id)
  }

  _handleSelectGroups = (selectChoice) => {
    if(selectChoice.value !== null) {
        this.props.setFieldValue('group_id', selectChoice.value);
    }
    this.setState({selectedGroup: selectChoice.value})
  }

  render() {

	const {
		values,
		handleChange,
        handleSubmit,
        isAuth,
	} = this.props;
	
    const {
        error, 
        isLoading,
        availableTutors,
        fetchTutors,
        fetchCourseError,
        courses,
        selectedCourse,
        selectedTutor,
        groups,
        selectedGroup,
    } = this.state;

    if(!isAuth) {
      return <Redirect to="/login" />
    }

    let select = <p>Options Loading</p> 
    let options = null
    let selectGroup = <p>Options Loading</p>
    let groupOptions = null

    // update the options if the fetch hasbeen done
    if(!isLoading && !fetchCourseError && courses && groups) {
      options = courses.map(option => ({
        label: option.name,
        value: option.id,        
      }))

      groupOptions = groups.map(group => ({
          label: group.name,
          value: group.id,
      }))

    select = <Select
        style={{width: '320px'}}
        name="course_id"
        value={selectedCourse}
        onChange={this._handleSelect} 
        options={options}
        clearable={false} />

    selectGroup = <Select
        style={{width: '320px'}}
        name="group_id"
        value={selectedGroup}
        onChange={this._handleSelectGroups} 
        options={groupOptions}
        clearable={false} />
    }

    // render tutors card
    let tutors = null;
    if(availableTutors !== null) {
        tutors = availableTutors.map(({id, name}) => (
            <ProfileCard key={id} invite={() => this.handleInviteTutor(id)} name={name} />
        ))
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
                        <FormSmall onSubmit={handleSubmit} tutor_id={selectedTutor} >
                            <TimeInput>
								<input
									id="dateFrom" 
									type="datetime-local"
									value={values.dateFrom}
									onChange={handleChange} />
                                <P>sampai</P>
								<input 
									id="dateTo"
									type="datetime-local"
									value={values.dateTo}
									onChange={handleChange} />
							</TimeInput>

							<InputSmall 
								placeholder="Place"
								id="place"
								type="text"
								value={values.place}
								onChange={handleChange} /> 

							<InputSmall 
								id="subject"
								placeholder="Subject"
								value={values.subject}
                                onChange={handleChange} />

                            <InputSmall 
                                id="tutor_id"
                                type="hidden" 
                                value={selectedTutor}
                                onChange={this.handleInviteTutor} />
                            <Text>Pilih Group</Text>
                            {selectGroup}
                            <Text>Pilih Matkul</Text>
                            {select}
                            <Text>Pilih Tutor</Text>
                            {tutors}

                            <ButtonModal type="submit">Buat</ButtonModal>
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

const EnhancedForm = withFormik({
	mapPropsToValue: () => ({
	  dateFrom: '',
	  dateTo: '',
	  place: '',
      subject: '',
      course_id: '',
      tutor_id: '',
      group_id: '',
	}),
    
	handleSubmit: (values, { props, setSubmitting }) => {
      axios({
          url: `apps/${values.group_id}/${values.tutor_id}`,
          method: 'POST',
          headers: {
              'remember_token': props.token
          },
          data: {
                'date': {
                    'dateFrom': values.dateFrom,
                    'dateTo': values.dateTo,
                },
                'place': values.place,
                'subject': values.subject,
          },
      })
      .then(response => {
          console.log("success", response.data)
      })
      .catch(error => {
          console.log("error", error)
      })
	},
	
	displayName: 'Basic Form', 
})(Timeline)

const mapStateToProps = ({auth}) => ({
  isAuth: auth.login.isAuth,
  token: auth.login.user.token,
  userId: auth.login.user.id,
})

export default connect(mapStateToProps)(EnhancedForm)