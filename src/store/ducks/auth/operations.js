import axios from '../../../axios'
import types from './types'
import actions from './actions'

const login = ({email, password}) => {
  return dispatch => {
      dispatch(actions.loginStart())
      axios({
        url:  '/login', 
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

  return {
    type: types.LOGOUT,
  }
}

// check if user still authenticated
const checkAuth = () => dispatch => {
  const token = localStorage.getItem('token')

  if(token === null) {
    dispatch(logout())
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    const currDate = new Date();
    
    // if the token is no longer valid it will logged out
    if(expirationDate <= currDate) {
      // dispatch(logout())        
    } else {
      const userId = localStorage.getItem('id');
      const email = localStorage.getItem('email')

      const user = {
        remember_token: token,
        id: userId,
        email: email,
      }

      dispatch(actions.loginSuccess({user}));
    }
  }
}

export default { 
  login,
  logout,
  checkAuth,
};