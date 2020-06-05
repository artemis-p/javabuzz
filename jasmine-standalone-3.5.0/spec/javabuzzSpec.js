describe('JavaBuzz', function() {
  var javaBuzz;

  beforeEach(function() {
    javaBuzz = new JavaBuzz();
  });

 describe('multiples of 3', function() {
   it('fizzes for 3', function() {
      expect(javaBuzz.play(3)).toEqual('Java');
   });

   it('fizzes for 6', function() {
    expect(javaBuzz.play(6)).toEqual('Java');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
       expect(javaBuzz.play(5)).toEqual('Buzz');
    });
 
    it('fizzes for 10', function() {
     expect(javaBuzz.play(10)).toEqual('Buzz');
     });
   });

   describe('multiples of 3 and 5', function() {
    it('buzzes for 15', function() {
       expect(javaBuzz.play(15)).toEqual('JavaBuzz');
    });
 
    it('fizzes for 30', function() {
     expect(javaBuzz.play(30)).toEqual('JavaBuzz');
     });
   });

   describe('all other numbers', function() {
    it('returns 1 for 1', function() {
       expect(javaBuzz.play(1)).toEqual(1);
    });
 
    it('returns 11 for 11', function() {
     expect(javaBuzz.play(11)).toEqual(11);
     });
   });
});