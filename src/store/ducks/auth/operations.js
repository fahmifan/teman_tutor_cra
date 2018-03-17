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
          const credentials = {
              email: response.data.email,
              id: response.data.id,
              token: response.data.token,
          }
          const experationDate = new Date(new Date().getTime() + 3600 * 1000);
          localStorage.setItem('token', credentials.token);
          localStorage.setItem('expirationDate', experationDate);
          localStorage.setItem('userId', credentials.id);
          localStorage.setItem('userId', credentials.email);
          dispatch(actions.loginSuccess(credentials))
      })
      .catch(error => {
          dispatch(actions.loginFailed(error))
      })
  }
}

export default { 
  login
};