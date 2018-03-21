import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { withFormik } from 'formik';
import Yup from 'yup';
import Select from 'react-virtualized-select';
import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";

import axios from '../axios';
import style from '../assets/style';
import Auxi from '../hoc/Auxi';
import { 
  NavbarSigned,
  Input,
  ButtonWide,
  Form
} from '../components';
import { operations as authOperations } from '../store/ducks/auth'

const BuatGrupForm = Form.extend`
  width: 725px;
  height: 550px;
  margin-top: 30px;
`

const HeaderImage = styled.div`
  box-sizing: border-box;
  width: 615px;
  height: 108px;
  border-radius: 5px;
  background: linear-gradient(180deg, #03256C -156.48%, #2541B2 100%);
  position: relative;
  margin-bottom: 50px;
`

const BoxIcon = styled.div`
    box-sizing: border-box;
    position: absolute;
    border-radius: 5px;
    top: 65%;
    left: 56px;
    width: 70px;
    height: 70px; 
    margin: 0 auto;
    background-position: center;
    background-size: cover;
    
    ${props => props.groupImage 
      ? `background-image: url(${props.groupImage});`
      : 'background: radial-gradient(25.14px at 50% 64.09%, #91D7ED 0%, #56CCF2 100%);'  
    }  
`

const InputWide = Input.extend`
    width: 615px;
`

const BuatGrupBtn = ButtonWide.extend`
    align-self: flex-end;
    margin-right: 56px;
    width: 250px;
`

class BuatGrup extends Component { 
  state = {
    courses: [],
    fetchCourseError: null,
    selectedCourse: null,
  }

  fetchOptions = () => {
    axios({
      url: '/courses',
      method: 'GET',
    })
    .then(response => {
      this.setState({courses: [...response.data]})
    })
    .catch(error => this.setState({fetchCourseError: error}))
  }

  componentWillMount() {
    this.props.checkAuth();
  }


  componentDidMount() {
    this.fetchOptions()
  }

  // selected
  _handleSelect = (selectChoice) => {
    if(selectChoice.value !== null) {
      this.props.setFieldValue('courses', selectChoice.value);
    }
    this.setState({selectedCourse: selectChoice.value})
  };

  render() {
    const {
      values,
      handleChange,
      handleSubmit,
    } = this.props;

    if(!this.props.isAuth) {
      return <Redirect to="/login" />
    }

    let select = <p>options error</p> 

    if(!this.state.fetchCourseError) {
      const options = this.state.courses.map(option => ({
        label: option.name,
        value: option.id,        
      }))

      select = <Select
        style={{width: '615px', marginTop: '18px'}}
        name="courses"
        value={this.state.selectedCourse}
        onChange={this._handleSelect} 
        options={options}
        clearable={false} />
    }

    return (
      <Auxi>
        <NavbarSigned />
        <BuatGrupForm onSubmit={handleSubmit}>
          <HeaderImage>
            <BoxIcon />
          </HeaderImage>
          <InputWide 
            id="namaGrup"
            type="namaGrup"
            placeholder="Nama Grup"
            value={values.namaGrup}
            onChange={handleChange} />
          <InputWide 
            id="deskripsi"
            type="deskripsi"
            placeholder="Deskripsi"
            value={values.deskripsi}
            onChange={handleChange} />
            {select}
          <BuatGrupBtn type="submit" >Buat Grup</BuatGrupBtn>
        </BuatGrupForm>
      </Auxi>
    );
  } 
}

const EnhancedForm = withFormik({
  mapPropsToValue: (props) => ({
    namaGrup: '',
    deskripsi: '',
    course_id: null,
  }),

  validationSchema: Yup.object().shape({
    namaGrup: Yup.string().required('Nama Grup is required!'),
    deskripsi: Yup.string().required('Deskripsi required'),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    axios({
      url: '/groups',
      method: 'POST',
      data: {
        "name": values.namaGrup,
        "desc": values.deskripsi,
        "course_id": values.courses,
        "user_id": props.userId,
      },
      headers: {
        "remember_token": props.token,
      }

    })
    .then(response => {
      props.history.push('/home')
    })
    .catch(error => {
      console.log(error)
    })
  },
  
  displayName: 'Basic Form', 
})(BuatGrup)

const mapStateToProps = ({auth}) => {
  return {
    userId: auth.login.user.id,
    token: auth.login.user.token,
    isAuth: auth.login.isAuth,
  }
}

const mapDispatchToProps = dispatch => ({
  checkAuth: () => dispatch(authOperations.checkAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedForm);