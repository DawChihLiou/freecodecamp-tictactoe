import { connect } from 'react-redux'
import { setBoard } from '../actions'
import Board from '../components/Board'

const mapStateToProps = (state) => {
  return {
    board : state.board,
    player: state.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (e, player) => {
      var coor = e.target.id.split('-')
      dispatch(setBoard(coor[0], coor[1], player))
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
) (Board)

export default App;
