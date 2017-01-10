describe('pirate', () => {
  describe('moving', () => {
    it( 'has a location', () => {
      expect(app.pirate.location.x).toBeDefined();
      expect(app.pirate.location.y).toBeDefined();
    });

    it( 'can move up', () => {
      var y = app.pirate.location.y;
      app.pirate.moveUp();
      expect(app.pirate.location.y).toEqual(y + 1);
    });

    it( 'can move down', () => {
      var y = app.pirate.location.y;
      app.pirate.moveDown();
      expect(app.pirate.location.y).toEqual(y - 1);
    });

    it( 'can move left', () => {
      var x = app.pirate.location.x;
      app.pirate.moveLeft();
      expect(app.pirate.location.x).toEqual(x - 1);
    });

    it( 'can move right', () => {
      var x = app.pirate.location.x;
      app.pirate.moveRight();
      expect(app.pirate.location.x).toEqual(x + 1);
    });
  });
  describe('arrring', () => {
    it('has a happiness', () => {
      expect(app.pirate.happiness).toBeDefined();
    });

    it( 'can move arrr', () => {
      var happiness = app.pirate.happiness;
      app.pirate.arrr();
      expect(app.pirate.happiness).toEqual(happiness + 1);
    });
  })
});
