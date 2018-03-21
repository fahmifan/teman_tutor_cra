import axios from '../../../axios'
import actions from './actions'

const handleJoinGroup = ({token, groupId, userId}) => dispatch => {
  dispatch(actions.joinGroupStart())

  axios({
    url: `/groups/${groupId}/${userId}`,
    method: 'POST',
    headers: {
      "remember_token": token,
    }
  })
  .then(response => {
    dispatch(actions.joinGroupSuccess(response.data))
  })
  .catch(error => {
    dispatch(actions.joinGroupFailed(error))
  })
}

const fetchGroups = () => dispatch => {
  dispatch(actions.fetchGroupStart())
  axios({
    url: '/groups',
    method: 'GET',
  })
  .then(response => {
    dispatch(actions.fetchGroupSuccess(response.data))
  })
  .catch(error => {
    dispatch(actions.fetchGroupFailed(error))
  })
}

export default {
  handleJoinGroup,
  fetchGroups,
}