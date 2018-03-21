import types from './types'

const joinGroupStart = () => ({
  type: types.JOIN_START,
})

const joinGroupSuccess = ({group_id, isAdmin, is_accepted}) => ({
  type: types.JOIN_SUCCESS,
  gorupId: group_id,
  isAdmin: isAdmin === 1,
  isAccepted: is_accepted === 1,
})

const joinGroupFailed = (error) => ({
  type: types.JOIN_FAILED,
  error: error,
})

const fetchGroupStart = () => ({
  type: types.FETCH_GROUPS_START,
})

const fetchGroupSuccess = (groups) => ({
  type: types.FETCH_GROUPS_SUCCESS,
  groups: groups
})

const fetchGroupFailed = error => ({
  type: types.FETCH_GROUPS_FAILED,
  error: error,
})

export default {
  joinGroupFailed,
  joinGroupStart,
  joinGroupSuccess,
  fetchGroupStart,
  fetchGroupSuccess,
  fetchGroupFailed,
}