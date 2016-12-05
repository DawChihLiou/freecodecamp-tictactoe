import React from 'react'

const Row = ({ row }) => (
  <div className="row">
    {row.map((c, i) =>
      <div
        key={ 'cell-' + i }
        className="col-xs-4 cell text-center"
      >{ c }</div>
    )}
  </div>
)

export default Row
