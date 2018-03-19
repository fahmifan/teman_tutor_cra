import types from './types'

const loginStart = () => ({
    type: types.LOGIN_START,
})

const loginSuccess = ({status, user}) => ({
    type: types.LOGIN_SUCCESS,
    token: user.remember_token,
    id: user.id,
    email: user.email,
    status: status,
})

const loginFailed = (error) => ({
    type: types.LOGIN_FAILED,
    error: error,
})

export default {
    loginStart,
    loginFailed,
    loginSuccess,
}