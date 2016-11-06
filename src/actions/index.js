/*
  state = {
    won: number, (null, -1, 0, 1)
    playas: string, ('x'/'o')
    computer: [],
    player: [],
    winCombos: [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
     [1, 4, 7],
     [2, 5, 8],
     [3, 6, 9],
     [1, 5, 9],
     [7, 5, 3]
   ]
  }
 */

export const RESTART_GAME       = 'RESTART_GAME'
export const ADD_PLAYER_MOVE    = 'ADD_PLAYER_MOVE'
export const ADD_COMPUTER_MOVE  = 'ADD_COMPUTER_MOVE'
export const SET_PLAYAS         = 'SET_PLAYAS'
export const SET_WINNING_STATUS = 'SET_WINNING_STATUS'

export const restartGame = () => {
  let won       = null
  let playas    = null
  let computer  = []
  let player    = []
  let winCombos = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
     [1, 4, 7],
     [2, 5, 8],
     [3, 6, 9],
     [1, 5, 9],
     [7, 5, 3]
   ]

  return {
    type: RESTART_GAME,
    defaultState: { won, playas, computer, player, winCombos }
  }
}

export const addPlayerMove = move => {
  return {
    type: ADD_PLAYER_MOVE,
    move: move
  }
}

export const addComputerMove = move => {
  return {
    type: ADD_COMPUTER_MOVE,
    move: move
  }
}

export const playAs = playas => {
  return {
    type: SET_PLAYAS,
    playas: playas
  }
}

export const setWinningStatus = status => {
  return {
    type: SET_WINNING_STATUS,
    winningStatus: status
  }
}
