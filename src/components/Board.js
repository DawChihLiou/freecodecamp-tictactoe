import React from 'react'
import Row from './Row'
import PlayerCard from './PlayerCard'

const Board = ({ board, winningStatus, player, onCellClick, onPlayClick }) => {
  if (!player.length) {
    return <PlayerCard onPlayClick={ onPlayClick }/>
  }

  return (
    <div className="container-fluid margin-top-md">
      <div className="container-fluid game-board">
        {board.map((row, i) =>
            <Row
              key={ 'row-' + i }
              row={ row }
              rowIndex={ i }
              onClick={ (e) => onCellClick(e, 'PLAYER') }
            />
        )}
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h1 className="text-center">{ winningStatus || <span style={{ visibility: 'hidden' }}>_</span> }</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board
