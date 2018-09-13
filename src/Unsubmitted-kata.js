// Numbers that are a power of their sum of digits

function isSumDig(dig) {
  let num = (''+dig)
  	.split('')
  	.reduce((a, b) => Number(a) + Number(b), 0);
  let pow = (''+dig).length;
  const result = Math.pow(num, pow);
  return dig == result;
}

function power_SumDigTerm(n) {
  const power = n;
  const sumDig = [];
  for(let i = 80; i; i++) {
    if(isSumDig(i)) sumDig.push(i);
    if(sumDig.length == n) return sumDig.pop();
  }
}

console.log(power_SumDigTerm(2));



/*
===================================================================================================================

Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary words"). For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes "AAIILNORSTTY" is also a "word" composed of the same letters as these two).

We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.

Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). For the JS tests with large positions, there's some leeway (.000000001%). If you feel like you're getting it right for the smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes.

Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).

C# is using a long, which may not have the best precision, but the tests are locked so we can't change it.

Sample words, with their rank:
ABAB = 2
AAAB = 1
BAAA = 4
QUESTION = 24572
BOOKKEEPER = 10743

function listPosition(word) {
  //Return the anagram list position of the word
  return 1;
}

---------TESTS--------------
Test.describe('Anagram', function() {
  var testValues = {'A' : 1, 'ABAB' : 2, 'AAAB' : 1, 'BAAA' : 4, 'QUESTION' : 24572, 'BOOKKEEPER' : 10743};
  it ("Must return appropriate values for known inputs", function() {
    for (var word in testValues) {
      if (testValues.hasOwnProperty(word)) {
        Test.assertEquals(listPosition(word), testValues[word], 'Incorrect list position for: ' + word);
      }
    }
  });
});

*/

// ======================================================================
// MOLECULE TO ATOMS
/*
For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map in Java).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

function parseMolecule(formula) {
  // do your science here
}

*/