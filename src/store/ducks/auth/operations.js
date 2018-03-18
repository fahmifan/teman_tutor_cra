import axios from '../../../axios';
import types from './types'
import actions from './actions'

const login = ({email, password}) => {
  return dispatch => {
      dispatch(actions.loginStart())
      axios.post('/auth', {
          email: email,
          password: password
      })
      .then(response => {
          const creds = response.data;
          const experationDate = new Date(new Date().getTime() + 3600 * 1000);

          localStorage.setItem('expirationDate', experationDate);
          localStorage.setItem('token', creds.token);
          localStorage.setItem('userId', creds.id);
          localStorage.setItem('email', creds.email);

          dispatch(actions.loginSuccess(creds))
      })
      .catch(error => {
          dispatch(actions.loginFailed(error))
      })
  }
}

export default { 
  login
};