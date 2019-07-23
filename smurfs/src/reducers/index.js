import {
  GET_SMURFS,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
 } from '../actions'

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: null
 }

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURFS: {
      return {
        ...state,
        fetchingSmurfs: true
      }
    }
    case GET_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      }
    }
    case GET_SMURF_FAILURE: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    }
    case ADD_SMURF: {
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true,
        error: ''
      }
    }
    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs:false,
        addingSmurf: false,
        error: ''
      }
    }
    case ADD_SMURF_FAILURE:
       return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
