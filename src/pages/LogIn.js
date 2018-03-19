import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { withFormik } from 'formik';
import Yup from 'yup';
import {connect} from 'react-redux';

import Auxi from '../hoc/Auxi';
import { Navbar, Input, Text, ButtonWide, Form } from '../components';
import style from '../assets/style';
import { operations } from '../store/ducks/auth'

class Login extends Component {
  render() {
    const {
      values,
      handleChange,
      handleSubmit,
      isAuth,
    } = this.props;

    if(isAuth) {
      return <Redirect to="/explore" />
    }

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
    props.login(values)
  },
  
  displayName: 'Basic Form', 
})(Login)

const mapDispatchToProps = (dispatch) => ({
  login: (values) => dispatch(operations.login(values))
})

const mapStateToProps = ({auth}) => ({
  isAuth: auth.login.isAuth,
})

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedForm)