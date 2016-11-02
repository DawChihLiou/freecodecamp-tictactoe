import { combineReducers } from 'redux'

const dummyReducer = (state={}, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  dummy: dummyReducer
})

export default reducer
