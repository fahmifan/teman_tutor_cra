import types from './types'

const loginStart = () => ({
    type: types.LOGIN_START,
})

const loginSuccess = (credentials) => ({
    type: types.LOGIN_SUCCESS,
    credetials: credentials,
})

const loginFailed = (error) => ({
    type: types.LOGIN_FAILED,
    error: error,
})

export default {
    loginStart,
    loginFailed,
}