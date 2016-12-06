import { combineReducers } from 'redux'
import {
  SET_BOARD,
  SET_PLAYAS,
  FILTER_PLAYER_WIN_COMBOS,
  FILTER_COMPUTER_WIN_COMBOS
} from '../actions'

const gameBoard = (state = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
], action) => {
  switch (action.type) {
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
  switch (action.type) {
    case SET_PLAYAS:
      return action.playAs
    default:
      return state
  }
}

const winCombos = (state = {
  player: [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [7, 5, 3]],
  computer: [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [7, 5, 3]]
  }, action) => {
    var  nextState
    
    switch (action.type) {
      case FILTER_PLAYER_WIN_COMBOS:
        nextState = Object.assign({}, state)

        nextState.player = nextState.player.filter(combo => {
          return combo.indexOf(action.move) === -1
        })
        return nextState
      case FILTER_COMPUTER_WIN_COMBOS:
        nextState = Object.assign({}, state)

        nextState.computer = nextState.computer.filter(combo => {
          return combo.indexOf(action.move) === -1
        })
        return nextState
      default:
        return state
    }
}

const reducer = combineReducers({
  board : gameBoard,
  player,
  winCombos
})

export default reducer
