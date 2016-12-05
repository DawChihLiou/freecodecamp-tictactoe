import React from 'react'

const Row = ({ row, rowIndex, onClick}) => (
  <div className="row">
    {row.map((c, i) =>
      <div
        key={ 'cell-' + i }
        id={ rowIndex + '-' + i }
        className="col-xs-4 cell text-center"
        onClick={ onClick }
      >
        { c || '_'}
      </div>
    )}
  </div>
)

export default Row
