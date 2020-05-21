describe('Javabuzz', function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

 describe('multiples of 3', function() {
   it('fizzes for 3', function() {
      expect(javabuzz.play(3)).toEqual('Fizz');
   });

   it('fizzes for 6', function() {
    expect(javabuzz.play(6)).toEqual('Fizz');
    });
  });
});