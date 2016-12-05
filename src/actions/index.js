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
export const SET_BOARD          = 'SET_BOARD'
export const SET_PLAYAS         = 'SET_PLAYER'
export const SET_WINNING_STATUS = 'SET_WINNING_STATUS'

export const setBoard = (row, col, player) => {
  return {
    type: SET_BOARD,
    row,
    col,
    player
  }
}

export const setPlayer = (playAs) => {
  return {
    type: SET_PLAYAS,
    playAs: playAs
  }
}

export const setWinningStatus = (status) => {
  return {
    type: SET_WINNING_STATUS,
    winningStatus: status
  }
}
