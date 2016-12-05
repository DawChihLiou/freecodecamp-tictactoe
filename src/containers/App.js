import React, { Component } from 'react';
import Board from '../components/Board'

const dummyboard = [['x','x','o'],['x','o','o'],['x','o','x']]

class App extends Component {
  render() {
    return (
      <Board board={ dummyboard }/>
    )
  }
}

export default App;
