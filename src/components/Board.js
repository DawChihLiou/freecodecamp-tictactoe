import React from 'react'
import Row from './Row'

const Board = ({ board }) => (
      <div className="container-fluid game-board">
        {board.map((row, i) =>
            <Row
              key={ 'row-' + i }
              row={ row }
            />
        )}
      </div>
    )


export default Board
