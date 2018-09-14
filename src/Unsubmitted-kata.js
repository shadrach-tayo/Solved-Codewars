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

// console.log(power_SumDigTerm(2));


// ======================================================================
// MOLECULE TO ATOMS
/*
For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map in Java).

For example:

var water = 'H2O'
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.
*/

function parseMolecule(formula) {
  // perform your science here
}

/*
// TEST CASE

// helper function, compares objects insensitive to field order
function equalsAtomically(obj1, obj2) {
    if (Object.keys(obj1).length == Object.keys(obj2).length) {
        for (var k in obj1) {
            if (obj1[k] != obj2[k]) return false;
        }
        return true;
    }
    return false;
}

Test.expect(equalsAtomically(parseMolecule("H2O"), {H: 2, O: 1}), "Should parse water");
Test.expect(equalsAtomically(parseMolecule("Mg(OH)2"), {Mg: 1, O: 2, H: 2}), "Should parse magnesium hydroxide: Mg(OH)2");
Test.expect(equalsAtomically(parseMolecule("K4[ON(SO3)2]2"), {K: 4, O: 14, N: 2, S: 4}), "Should parse Fremy's salt: K4[ON(SO3)2]2");

*/