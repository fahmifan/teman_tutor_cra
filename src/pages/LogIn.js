import React, { Component } from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import Yup from 'yup';
import {connect} from 'react-redux';

import Auxi from '../hoc/Auxi';
import { Navbar, Input, Text, ButtonWide } from '../components';
import style from '../assets/style';
import { operations } from '../store/ducks/auth'

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

class Login extends Component {
  render() {
    const {
      values,
      handleChange,
      handleSubmit,
    } = this.props;

    return (
      <Auxi>
        <Navbar />
        <Form onSubmit={handleSubmit}>
          <Text color={style.colors.black} bold fontSize={36}>Log in</Text>
          <Input 
            id="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange} />
          <Input 
            id="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange} />
          <ButtonWide type="submit" >Log in</ButtonWide>
        </Form>
      </Auxi>
    );    
  }
}
const EnhancedForm = withFormik({
  mapPropsToValue: () => ({
    email: '',
    password: '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    password: Yup.string().required('Password required'),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values)
    props.login(values)
  },
  
  displayName: 'Basic Form', 
})(Login)

const mapDispatchToProps = (dispatch) => ({
  login: (values) => dispatch(operations.login(values))
})

export default connect(null, mapDispatchToProps)(EnhancedForm)