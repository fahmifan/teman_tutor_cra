import  types from './types'

const initState = {
    error: null,
    loading: false,
    user: {
        id: 4,
        token: 'h4GfDlYvSlNigJBUb76JZLx7ZbD06LtAco01BhKVXNaN5KN5MQMdN1dfwzuk',
        email: null,
    },
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case types.LOGIN_START: return {
            ...state,
            loading: true,
        } 
        case types.LOGIN_SUCCESS: return {
            ...state,
            loading: false,
            error: null,
            user: {
                ...state.user,
                token: action.token,
                id: action,
                email: action.email,    
            }
        }
        case types.LOGIN_FAILED: return {
            ...state,
            loading: false,
            error: action.error,
            user: {
                ...state.user,
                token: null,
                id: null,
                email: null,
            }
        }
        default: return state
    }
}

export default reducer;