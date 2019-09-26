import { combineReducers } from 'redux'

import { DATA_AVAILABLE, BUTTON_PRESSED } from '../actions/' //Import the actions types constant we defined in our actions

let dataState = { data: [] }

let geoState = { x: { latitude: 59.939095, longitude: 30.315868 } }

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      state = { ...state, data: action.data }
      return state
    default:
      return state
  }
}

const geoReducer = (state = geoState, action) => {
  switch (action.type) {
    case BUTTON_PRESSED:
      state = { ...state, x: action.x }
      return state
    default:
      return state
  }
}

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
  geoReducer
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer
