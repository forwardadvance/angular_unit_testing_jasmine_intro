

## Jasmine

Jasmine is an English-like syntax for writing unit tests. Karma supports several syntaxes, but most people use Jasmine style syntax. Jasmine looks like this:

```
it( 'should add one and one', () => {
  expect( 1 + 1 ).toEqual( 2 )
});
```

In theory, Jasmine tests can be read and understood by a layperson. Jasmine tests should be simple, legible, standard. A new coder should be able to join a team and start reading and writing tests straight away.

Don't go over-complicating your tests with anything surprising or you have defeated the point of testing. Sensible, well named helper functions are allowed.

aside.box
:markdown
  ## What about Karma?

  Karma is a unit testing framework that can run Jasmine tests in a console. It is especially useful when deploying on a CI server.



!=resources(exercise)

section.exercise
:markdown
## Exercise 1 - Check that basic maths works

In this exercise, we're going to set up and run some tests in a simple, browser based test harness. In the next section we will automate these tests so they run automatically.

Download the test harness from the Github repository. Open it in a browser. You should see a space where you can put your tests.

You'll find in your exercise_1 folder a test harness with a `specs.html` file which you can open in your browser, and a piece of code called `maths.js`. This exposes a global object called maths. We can run code like `maths.sum(2, 2)` and it will return the result.

This code is broken. It's down to you to fix it.

Write code to test and debug `maths.sum`, `maths.power` and `maths.div`. Remember to test edge cases, particularly test with bad data.

Now use tests to develop subtract and exponent functions. Remember to test edge cases.

You can view the Jasmine documentation here: <http://jasmine.github.io/2.1/introduction.html>


## Exercise 2 - Treasure Island Game

In this course, we'll develop a simple little treasure hunting game. You can take this as far as you like.

Here's a spec:

```
describe('pirate', () => {
  describe('moving', () => {
    it( 'has a location', () => {
      expect(app.pirate.x).toBeDefined();
      expect(app.pirate.y).toBeDefined();
    });
    it( 'can move up', () => {
      var x = app.pirate.x
      app.pirate.moveUp();
      expect(app.pirate.x).toEqual(x + 1);
    });
  });
});
```

* Write code to fulfil the spec. You won't need any Angular yet. We'll turn this into a pirateService later.
* Now add `goDown()`, `goLeft()` and `goRight()` methods. Write the tests first. Then write the code to make them pass.
* Add an `arrr()` method that increases pirate happiness. Again, write the tests first
* Add a `dig()` method that decreases the pirate's happiness.
