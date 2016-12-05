import React from 'react'
import Row from './Row'

const Board = ({ board, onCellClick }) => (
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
    )


export default Board
