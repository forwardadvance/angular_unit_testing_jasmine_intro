describe('pirate', () => {
  describe('moving', () => {
    it( 'has a location', () => {
      expect(app.pirate.location.x).toBeDefined();
      expect(app.pirate.location.y).toBeDefined();
    });

    it( 'can move up', () => {
      var y = app.pirate.location.y
      app.pirate.moveUp();
      expect(app.pirate.location.y).toEqual(y + 1);
    });
  });
});
