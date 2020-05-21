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

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
       expect(javabuzz.play(5)).toEqual('Buzz');
    });
 
    it('fizzes for 10', function() {
     expect(javabuzz.play(10)).toEqual('Buzz');
     });
   });

   describe('multiples of 3 and 5', function() {
    it('buzzes for 15', function() {
       expect(javabuzz.play(15)).toEqual('FizzBuzz');
    });
 
    it('fizzes for 30', function() {
     expect(javabuzz.play(30)).toEqual('FizzBuzz');
     });
   });
});