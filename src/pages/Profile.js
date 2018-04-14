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
  height: 485px;
  background-color: ${style.colors.white};
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Profile extends Component { 
  state = {
    showTutorForm: false,
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

  handleBeTutorBtn = () => {
    this.setState({showTutorForm: !this.state.showTutorForm})
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
        style={{width: '335px', marginTop: '18px'}}
        name="courses"
        value={selectedCourse}
        onChange={this._handleSelect} 
        options={options}
        clearable={false} />
    }
    return (
      <Form onSubmit={handleSubmit}>
        <Text fontSize={24} >Username: {username || 'John Doe'}</Text>
        <Text fontSize={24} >Email: {email || 'johndoe@email.com'}</Text>
        {!this.state.showTutorForm && <ButtonWide type="button" onClick={this.handleBeTutorBtn}>Become a Tutor</ButtonWide>}
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
          type="num"
          placeholder="IPK"
          value={values.ipk}
          onChange={handleChange} />
        {select}
        <ButtonWide type="submit" >Submit</ButtonWide>
      </Form>
    )
  }
}

const EnhancedForm = withFormik({
  mapPropsToValue: () => ({
    price_rate: '',
    address: '',
    ipk: '',
    course_id: '',
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values, "submitted")
  },
  
  displayName: 'Basic Form', 
})(Profile)

export default EnhancedForm;