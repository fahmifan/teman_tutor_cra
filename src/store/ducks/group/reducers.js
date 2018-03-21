import types from './types'
import { combineReducers } from 'redux'

const initState = {
  gorupId: null,
  isAdmin: false,
  isAccepted: false,
  error: null,
  isLoading: false,
}

const joinGroupReducer = (state = initState, {type, error, isAdmin, isAccepted, gorupId}) => {
  switch(type) {
    case types.JOIN_START: return {
      ...state,
      isLoading: true,
    }
    case types.JOIN_SUCCESS: return {
      ...state,
      isLoading: false,
      isAdmin: isAdmin,
      isAccepted: isAccepted,
      gorupId: gorupId,
      error: null,
    }
    case types.JOIN_FAILED: return {
      ...state,
      isLoading: false,
      error: error,
    }
    default: return state
  }
}

const fetchGroupState = {
  isLoading: false,
  error: null,
  groups: [],
}

const fetchGroupReducer = (state = fetchGroupState, {type, error, groups}) => {
  switch(type) {
    case types.FETCH_GROUPS_START: return {
      ...state,
      isLoading: true,
    }
    case types.FETCH_GROUPS_SUCCESS: return {
      ...state,
      isLoading: false,
      error: null,
      groups: [...groups],
    }
    case types.FETCH_GROUPS_FAILED: return {
      ...state,
      isLoading: false,
      error: error,
    }
    default: return state
  }
}

const reducer = combineReducers({
  joinGroup: joinGroupReducer,
  fetchGroups: fetchGroupReducer,
})

export default reducer