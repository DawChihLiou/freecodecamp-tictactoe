import React from 'react'
import Row from './Row'

const Board = ({ board, winningStatus, onCellClick }) => {
  return (
    <div>
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
            <h1 className="text-center">{ winningStatus }</h1>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Board
