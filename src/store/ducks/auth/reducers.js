import  types from './types'

const initState = {
    error: null,
    loading: false,
    status: null,
    user: {
        id: null,
        token: null,
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
            status: action.status,
            user: {
                ...state.user,
                token: action.token,
                id: action.id,
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