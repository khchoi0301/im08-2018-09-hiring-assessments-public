/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function () {
  this._storage = {}
  this.count = 0
  this.rmcount = 0
};

Queue.prototype.add = function (input) {
  this._storage[this.count] = input
  this.count++
};

Queue.prototype.remove = function () {
  var temp;
  if (this.count > 0) {
    temp = this._storage[this.rmcount]
    delete this._storage[this.rmcount]
    this.rmcount++
  }
  return temp


  // var temp = this._storage['0']
  // delete this._storage['0']
  // for (let key in this._storage) {
  //   this._storage[key - 1] = this._storage[key]
  // }
  // if (this.count > 0) { this.count-- }
  // delete this._storage[this.count]
  // return temp
};

module.exports = Queue;