import React from 'react'

const PlayerCard = ({onPlayClick}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <h1>You want to play as</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-6">
        <h1 id="o"
          onClick={ (e) => onPlayClick(e) }>o</h1>
      </div>
      <div className="col-xs-6">
        <h1 id="x"
          onClick={ (e) => onPlayClick(e) }>x</h1>
      </div>
    </div>
  </div>
)

export default PlayerCard
