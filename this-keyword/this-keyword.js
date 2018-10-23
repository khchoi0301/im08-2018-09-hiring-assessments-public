// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]

var sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 }
  ],
  playerNames: function () {
    return this.players.map((player, i) => {
      return player.name + " plays " + this.name
    })
  }
};

module.exports = sport;