class ChessPiece {
  constructor(name, id, isAttacked, color) {
    this.name = name // string
    this.id = id // string
    this.isAttacked = isAttacked // boolean
    this.color = color // string: 'white' || 'black'
  }

  setSquare() {
    // assign this piece to a specific square
    // this.square = square
  }

  getSquare() {
    // get the current square this piece is on
    // undefined if this piece is not on the board
  }
}
