import axios from '../../../axios'
import types from './types'
import actions from './actions'

const login = ({email, password}) => {
  return dispatch => {
      dispatch(actions.loginStart())
      axios({
        url:  '/auth', 
        method: 'POST',
        data: {
          "email": email,
          "password": password          
        }
      })
      .then(response => {
          const {status, user} = response.data;
          const experationDate = new Date(new Date().getTime() + 3600 * 1000);

          localStorage.setItem('expirationDate', experationDate);
          localStorage.setItem('token', user.remember_token);
          localStorage.setItem('id', user.id);
          localStorage.setItem('email', user.email);

          dispatch(actions.loginSuccess({status, user}))
      })
      .catch(error => {
        dispatch(actions.loginFailed(error))
      })
  }
}

const logout = () => {
  const nowDate = new Date(new Date().getTime() + 3600 * 1000);
  const experationDate = localStorage.getItem('expirationDate');

  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('id');
}

export default { 
  login
};