import { combineReducers } from 'redux'

/*
  state = {
    winner: string, ('computer'/'player'/'tie')
    playas: string, ('x'/'o')
    started: boolean,
    turn: 'x',
    computer: [],
    player: [],
  }
 */

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
