import axios from 'axios';
// Action types
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS'
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE'
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'
// export const UPDATE_SMURF = 'UPDATE_SMURF';
// export const DELETE_SMURF = 'DELETE_SMURF';

export const getSmurfs = () => {
  const promise = axios.get ('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: GET_SMURFS });
    promise.then(res => {
      dispatch({ type: GET_SMURF_SUCCESS , payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_SMURF_FAILURE, payload: err.response.data })
    })
  }
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF })
  console.log(newSmurf)
  axios.post('http://localhost:3333/smurfs', newSmurf)
  .then(res => {
    dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: ADD_SMURF_FAILURE, payload: err.response.data })
  })
}
