import React from 'react'
import Game from '../model/chess'

class Chessgame extends React.Component {
  state = {
    gameState: new Game(this.props.isWhite),
    whiteKingInCheck: false,
    blackKingInCheck: false,
  }

  render() {
    return (
      /**
       * <div background = chessboard>
       *    <stage>
       *      <layer for loop  model and renders it>
       *    </stage>
       * </div>
       */
    )
  }

  move() {
    /**
     * uses pythagorem theorem to calculate the distance between the final position
     * of the dragged chess piece and every square on the board and chooses the 
     * closest square (shortest distance) and assigns that chess piece to that square 
     * */ 
  }
}

export default Chessgame
