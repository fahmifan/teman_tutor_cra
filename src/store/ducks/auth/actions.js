import types from './types'

const loginStart = () => ({
    type: types.LOGIN_START,
})

const loginSuccess = ({token, id, email}) => ({
    type: types.LOGIN_SUCCESS,
    token: token,
    id: id,
    email: email,
})

const loginFailed = (error) => ({
    type: types.LOGIN_FAILED,
    error: error,
})

export default {
    loginStart,
    loginFailed,
}