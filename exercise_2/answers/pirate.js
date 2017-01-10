'use strict';

var app = app || {}

app.pirate = {
  location: {
    x: 0,
    y: 0
  },
  happiness: 0,
  moveUp: function() {
    this.location.y++;
  },
  moveDown: function() {
    this.location.y--;
  },
  moveLeft: function() {
    this.location.x--;
  },
  moveRight: function() {
    this.location.x++;
  },

  arrr: function() {
    this.happiness++;
  }
}
