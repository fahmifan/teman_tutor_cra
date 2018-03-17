import  types from './types'

const initState = {
    error: null,
    loading: false,
    credentials: null,
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
            credentials: action.credentials,
        }
        case types.LOGIN_FAILED: return {
            ...state,
            loading: false,
            error: action.error,
        }
        default: return state
    }
}

export default reducer;