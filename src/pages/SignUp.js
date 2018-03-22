import React from 'react';
import styled from 'styled-components';
import Yup from 'yup'
import {withFormik} from 'formik'
import { Link } from 'react-router-dom'

import axios from '../axios';
import Auxi from '../hoc/Auxi';
import { Navbar, Input, Text, ButtonWide, Form } from '../components';
import style from '../assets/style';

export const UserForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <Auxi>
      <Navbar />

      <Form onSubmit={handleSubmit}>
        <Text color={style.colors.black} bold fontSize={36}>Sign up</Text>
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
        <ButtonWide type="submit">Sign up</ButtonWide>
        <Text>Become a Tutor <Link to="/tutor" >here</Link></Text>
      </Form>
    </Auxi>
  );
}

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test: function(value) {
      return value === this.resolve(ref);
    },
  });
}
Yup.addMethod(Yup.string, 'equalTo', equalTo);

export const SignUp =  withFormik({
  mapPropsToValues: (props) => ({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!'),
    confirmPassword: Yup.string().equalTo(Yup.ref('password'), 'Password must match').required('Required')
  }),

  handleSubmit: (values, {props, setSubmitting }) => {
    axios({
      url: '/users',
      method: 'post',
      data: { 
          "email": values.email,
          "password": values.password,
          "name": values.username,
      },
    })
    .then(response => {
      props.history.push('/login');
    })
    .catch(error => {
      console.log(error);
    })
  },
})(UserForm)