import React from 'react'

const PlayerCard = ({onPlayClick}) => (
  <div className="container-fluid board text-center margin-top-md">
    <div className="row">
      <div className="col-xs-12">
        <h1>You want to play as</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-6 col-sm-3 col-sm-offset-3">
        <h1 id="o" className="link"
          onClick={ (e) => onPlayClick(e) }>o</h1>
      </div>
      <div className="col-xs-6 col-sm-3">
        <h1 id="x" className="link"
          onClick={ (e) => onPlayClick(e) }>x</h1>
      </div>
    </div>
  </div>
)

export default PlayerCard
