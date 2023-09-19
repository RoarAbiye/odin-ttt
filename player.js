
function Player(name, symbol) {
  return {
    name,
    symbol,
    moves: [],
    setName(newName) { this.name = newName },
  }
}
