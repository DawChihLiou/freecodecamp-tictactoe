import { connect } from 'react-redux'
import {
  setBoard,
  setWinCombos,
  setWinningStatus,
  refresh,
  setPlayer } from '../actions'
import Board from '../components/Board'

const mapStateToProps = (state) => {
  return {
    board         : state.board,
    winningStatus : state.winningStatus,
    player        : state.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (e, player) => {
      var coor = e.target.id.split('-')
      dispatch(moveThunk(coor[0], coor[1], player))
    },
    onPlayClick: (e) => {
      dispatch(setPlayer(e.target.id))
      // 'o' always go first
      if (e.target.id === 'x') dispatch(computerMoveThunk())
    }
  }
}

function moveThunk (row, col, player) {
  return (dispatch, getState) => {
    if (getState().winningStatus !== '') return
    if (getState().board[row][col]) return

    var state           = getState()
    var computerSymbal  = state.player === 'x' ? 'o' : 'x'
    var totalMoves      = getMoves(state.board, new RegExp('[' + state.player + computerSymbal + ']'))
    var next, status

    // player's move
    dispatch(setBoard(row, col, state.player))
    dispatch(setWinCombos(row, col, 'COMPUTER'))

    state = getState()
    status = getGameStatus(state)
    dispatch(setWinningStatus(status || ''))

    if (status) {
      setTimeout(() => {
        dispatch(refresh())
      }, 1000)
    }

    if (state.winningStatus !== '') return

    // computer's move
    next = computeNextMove(state)
    dispatch(setBoard(next.row, next.col, computerSymbal))
    dispatch(setWinCombos(next.row, next.col, 'PLAYER'))

    state = getState()
    status = getGameStatus(state)
    dispatch(setWinningStatus(status || ''))

    if (status) {
      setTimeout(() => {
        dispatch(refresh())
      }, 1000)
    }
  }
}

function computerMoveThunk () {
  return (dispatch, getState) => {
    var state           = getState()
    var computerSymbal  = state.player === 'x' ? 'o' : 'x'
    var next

    next = computeNextMove(state)
    dispatch(setBoard(next.row, next.col, computerSymbal))
    dispatch(setWinCombos(next.row, next.col, 'PLAYER'))

  }
}

const coordMap = {
  1: [0, 0], 2: [0, 1], 3: [0, 2],
  4: [1, 0], 5: [1, 1], 6: [1, 2],
  7: [2, 0], 8: [2, 1], 9: [2, 2]
}

const numberMap = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function computeNextMove (state) {
  var computerSymbal = state.player === 'x' ? 'o' : 'x'
  var playerMoves    = getMoves(state.board, new RegExp(state.player))
  var computerMoves  = getMoves(state.board, new RegExp(computerSymbal))
  var next

  // check if computer has twos in a row
  if (!next) next = checkPlayerIsWinning(state.winCombos.computer, computerMoves)
  // check if user has twos in a row
  if (!next) next = checkPlayerIsWinning(state.winCombos.player, playerMoves)
  // look for the best winning move if player is not winning
  if (!next) next = findNextMoveAroundPreviousMoves(state.winCombos.computer, computerMoves)
  // when tie game is formed
  if (!next) next = findBestEmptyMove([].concat(playerMoves, computerMoves))

  return {row: coordMap[next][0], col: coordMap[next][1]}
}

function getMoves (board, regex) {
  var moves = []

  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (regex.test(cell)) moves.push(numberMap[i][j])
    })
  })

  return moves
}

function checkPlayerIsWinning(combos, moves) {
  if (moves.length <= 1) return

  var move = undefined

  combos.forEach(combo => {
    if (move) return

    let count = 0

    combo.forEach(num => {
      if (moves.indexOf(num) !== -1) {
        count++
      } else {
        move = num
      }
    })

    if (count !== 2) move = undefined
  })

  return move
}

function findNextMoveAroundPreviousMoves (combos, moves) {
  var flat = combos.reduce((acc, cur) => {
    return acc.concat(cur)
  }, [])

  return mode(flat, moves)
}

function mode (arr, except) {
  if (!arr.length) return

  var modeMap = {}
  var max, count = 0

  arr.forEach(e => {
    if (except.indexOf(e) !== -1) return

    if (!modeMap[e]) modeMap[e] = 1
    else modeMap[e]++

    if (modeMap[e] > count) {
      max = e
      count = modeMap[e]
    }
  })

  return max
}

function findBestEmptyMove (moves) {
  if (moves.length === 9) return

  var move

  for (var i = 1; i <= 9; i++) {
    if (moves.indexOf(i) === -1) {
      move = i
      break
    }
  }

  return move
}

function getGameStatus (state) {
  var status, count = 0
  var computerSymbal = state.player === 'x' ? 'o' : 'x'
  var playerMoves    = getMoves(state.board, new RegExp(state.player))
  var computerMoves  = getMoves(state.board, new RegExp(computerSymbal))

  // check lose
  state.winCombos.computer.forEach(combo => {
    if (status) return

    combo.forEach(num => {
      if (computerMoves.indexOf(num) !== -1) count++
    })
    if (count !== 3) count = 0
    else status = 'You lose'
  })

  // check win
  state.winCombos.player.forEach(combo => {
    if (status) return

    combo.forEach(num => {
      if (playerMoves.indexOf(num) !== -1) count++
    })
    if (count !== 3) count = 0
    else status = 'You win!'
  })

  // check tie
  if (
    playerMoves.length + computerMoves.length === 9 &&
    state.winCombos.player.length === 0 &&
    state.winCombos.computer.length === 0 ) {
      status = 'It\'s a tie!'
  }

  return status
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
) (Board)

export default App;
