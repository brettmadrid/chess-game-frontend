class Game {
  constructor(thisPlayerIsPlayingAsWhite) {
    this.thisPlayerIsPlayingAsWhite = thisPlayerIsPlayingAsWhite // boolean
    this.chessBoard = this.makeStartingBoard()
  }

  makeStartingBoard() {
    // make the board orientation for the current player
    if (this.thisPlayerIsPlayingAsWhite) {
      // make a chess orientation for white's perspective
    } else {
      // make a chess orientation for black's perspective
    }
  }

  movePiece() {
    // pieceId: String
    // to: [x, y]
  }
}
