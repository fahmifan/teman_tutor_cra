import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-virtualized-select';
import { withFormik } from 'formik';
import Yup from 'yup';

import axios from '../axios';
import style from '../assets/style';
import Auxi from '../hoc/Auxi';
import { 
  Text,
  Input,
  ButtonWide,
 } from '../components';

const Form = styled.form`
  box-sizing: border-box;
  width: 450px;
  height: 100%;
  background-color: ${style.colors.white};
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Tutor extends Component { 
  state = {
    selectedCourse: null,
    courses: null,
    fetchCourseError: null,
    isLoading: true,
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

  componentDidMount() {
    this.fetchOptions()
  }

  _handleSelect = (selectChoice) => {
    if(selectChoice.value !== null) {
      this.props.setFieldValue('courses', selectChoice.value);
    }
    this.setState({selectedCourse: selectChoice.value})
  };

  render() {
    const {username, email, values, handleChange, handleSubmit} = this.props;
    const { courses, fetchCourseError, isLoading, selectedCourse  } = this.state;

    let select = <p>Options Loading</p> 

    if(!isLoading && fetchCourseError == null) {
      const options = courses.map(option => ({
        label: option.name,
        value: option.id,        
      }))

      select = <Select
        style={{width: '335px'}}
        name="courses"
        value={selectedCourse}
        onChange={this._handleSelect} 
        options={options}
        clearable={false} />
    }
    return (
      <Form onSubmit={handleSubmit}>
        <Text color={style.colors.black} bold fontSize={36}>Tutor</Text>
        <Input
          placeholder="Username"
          id="username" 
          type="text"
          value={values.username}
          onChange={handleChange}
          pattern="^[A-Za-z0-9_]{1,15}$" />
        <Input 
          placeholder="Email"
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange} />

        <Input 
          id="price_rate"
          type="number"
          placeholder="Price rate"
          value={values.price_rate}
          onChange={handleChange} />
        
        <Input 
          id="address"
          type="text"
          placeholder="Address"
          value={values.address}
          onChange={handleChange} />

        <Input 
          id="ipk"
          type="number" step="0.01" min="0" max="4"
          placeholder="IPK"
          value={values.ipk}
          onChange={handleChange} />
        
        <div style={{marginTop: '10px'}}>
          <Text style={{textAlign: 'left'}}>Courses</Text>
          {select}
        </div>                
        <Input 
          placeholder="Password"
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" /> 
        
        <Input 
          placeholder="Confirm password" 
          id="confirmPassword" 
          type="password" 
          value={values.confirmPassword}
          onChange={handleChange}
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" />

        <ButtonWide type="submit" >Submit</ButtonWide>
      </Form>
    )
  }
}

const EnhancedForm = withFormik({
  mapPropsToValue: () => ({
    username: '',
    email: '',
    password: '',
    price_rate: '',
    address: '',
    ipk: '',
    course_id: '',
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values.price_rate, "submitted")

    const tutor = {
      'name': values.username,
      'email': values.email,
      'password': values.password,
      'price_rate': values.price_rate,
      'ipk': values.ipk,
      'course_id': values.course_id,
    }

    axios({
      url: '/tutors',
      method: 'POST',
      data: tutor,
    })
    .then(response => {
      props.history.push('/login')
    })
  },
  
  displayName: 'Basic Form', 
})(Tutor)

export default EnhancedForm;