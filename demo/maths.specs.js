'use strict';

describe('working specs', () => {
  it('works', () => {
    expect({}).toEqual({});
    expect(1+1).toEqual(2);
  })
});

describe('maths', () => {
  describe('sum', () => {
    it('can add numbers', () => {
      expect(maths.sum(1,1)).toBe(2);
    });
  });

  describe('subtract', () => {
    it("can subtract numbers", () => {
      expect(maths.sub(10,2)).toBe(8);
      expect(maths.sub(20,2)).toBe(18);
    });
  });
});























// Goal State

// describe( 'working tests', () => {
//   it( 'should work', () => {
//     expect(true).toBe(true);
//   });
// });

// describe('maths', () => {
//   describe('sum', () => {
//     it(' should add numbers', () => {
//       expect(maths.sum(1,1)).toBe(2);
//       expect(maths.sum(1,4)).toBe(5);
//     } );
//     it(' should deal with undefined and not die', () => {
//       expect(maths.sum()).toEqual(NaN);
//     } );
//   })
// })
