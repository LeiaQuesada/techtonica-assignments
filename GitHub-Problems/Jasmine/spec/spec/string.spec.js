
// describe provides context for a group of tests it takes 2 arguments
// the first argument passed should describe the context for what we are testing, and the function will contain one or more tests
//inside describe, you can add multiple it() statements
// each it() will contain tests for a specific behavior (known as specs)
// to add a test, we add an expect() statement within the it()
describe('A string', function () {
    let WORD = 'word';

    it('containing 4 letters should have length 4', function () {
        WORD = 'word';
        // .toBe() is a matcher, tests that the actual value in the expect evaluates to the expected value.
        expect(WORD.length == 4).toBe(true);
    });

  // New spec!
  it('should be equal to an identical string', function () {
    WORD = 'word';

    expect(WORD == 'word').toBe(true);
  });


  it('should have a length greater than 5', function () {
    expect('elephant'.length).toBeGreaterThan(5);
  });
});

