export const DATA_AVAILABLE = 'DATA_AVAILABLE'
export const BUTTON_PRESSED = 'BUTTON_PRESSED'

//Import the sample data
import Data from '../text.json'

export function getData() {
  return dispatch => {
    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = Data.text
      console.log('action dispatched!')
      dispatch({ type: DATA_AVAILABLE, data: data })
    }, 2000)
  }
}

export function updateMap() {
  return dispatch => {
    const x = { latitude: 59.939095, longitude: 30.415868 }
    console.log('Button action dispatched')
    dispatch({ type: BUTTON_PRESSED, x: x })
  }
}
