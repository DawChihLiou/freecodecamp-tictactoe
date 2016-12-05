import { combineReducers } from 'redux'
import { SET_BOARD, SET_PLAYAS } from '../actions'

const gameBoard = (state = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
], action) => {
  switch(action.type) {
    case SET_BOARD:
      return state.map((row, i) => {
        if (i === Number(action.row))
          row[Number(action.col)] = action.player
        return row
      })
    default:
      return state
  }
}

const player = (state = 'o', action) => {
  switch(action.type) {
    case SET_PLAYAS:
      return action.playAs
    default:
      return state
  }
}

const reducer = combineReducers({
  board : gameBoard,
  player: player
})

export default reducer
