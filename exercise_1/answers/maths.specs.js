
describe('Maths', function() {
  describe('maths.sum', function() {
    it('should be the case that one and one is 2', function() {
      expect(maths.sum(2,2)).toBe(4);
    });
    it('should be the case that 19 and 6 are 25', function() {
      expect(maths.sum(19,6)).toBe(25);
    });
    it('should be the case that infinity and infinity are infinity', function() {
      var infinity = 1 / 0;
      expect(maths.sum(infinity, infinity)).toBe(infinity);
    });
  });


  describe('maths.power', function() {
    it('should be the case that 2 to the power 3 is 8', function() {
      expect(maths.power(2,3)).toBe(8);
    });
    it('should be the case that 2 to the power 0 is 1', function() {
      expect(maths.power(2,0)).toBe(1);
    });
  });


  describe('maths.div', function() {
    it('should be the case that 2 / 2 is 1', function() {
      expect(maths.div(2,2)).toBe(1);
    });
    it('should be the case that 2 / -2 is 1', function() {
      expect(maths.div(2,-2)).toBe(-1);
    });
  });
});
