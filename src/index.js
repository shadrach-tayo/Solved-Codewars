/*// Codewar 1
// instructions 
// Help a fruit packer sort out the bad apples.

// There are 7 varieties of apples, all packaged as pairs and stacked in a fruit box. Some of the apples are spoiled. The fruit packer will have to make sure the spoiled apples are either removed from the fruit box or replaced. Below is the breakdown:

// Apple varieties are represented with numbers, 1 to 7

// A fruit package is represented with a 2 element array [4,3]

// A fruit package with one bad apple, or a bad package, is represented with [2,0] or [0,2]

// A fruit package with two bad apples, or a rotten package, is represented with [0,0]

// A fruit box is represented with: input below. Write a program to clear the fruit box off bad apples.

// The INPUT will be a fruit box represented with a 2D array: [[1,3],[7,6],[7,2],[1,3],[0,2],[4,5],[0,3],[7,6]]

// The OUTPUT should be the fruit box void of bad apples: [[1,3],[7,6],[7,2],[1,3],[2,3],[4,5],[7,6]]

// Conditions to be met:

// 1.A bad package should have the bad apple replaced if there is another bad package with a good apple to spare. Else, the bad package should be discarded.

// 2.The order of the packages in the fruit box should be preserved. Repackaging happens from the top of the fruit box index = 0 to the bottom nth index. Also note how fruits in a package are ordered when repacking. Example shown in INPUT/OUPUT above.

// 3.Rotten packages should be discarded.

// 4.There can be packages with the same variety of apples, e.g [1,1], this is not a problem.

// var input = [ [ 1, 3 ],
//   [ 7, 6 ],
//   [ 7, 2 ],
//   [ 1, 3 ],
//   [ 0, 2 ],
//   [ 4, 5 ],
//   [ 0, 0 ],
//   [ 7, 6 ] ];

  // function isHalfBad(num) {
  // 	return num.indexof(0) !== -1 || num.indexOf(2) !== -1;
  // }

  // function bad(input) {
  // 	 return (input.indexOf(0) !== -1 && input.indexOf(2) !== -1)     
  // }

  // // console.log(bad([0, 2]))

  // function rotten(input) {
  // 	return input.every(function(num) {
  // 		return num == 0;
  // 	});
  // }
  // console.log(rotten([0, 0]));



  // function modify(pack) {
  // 	pack.map(num => num + 2);
  // }

  function badApples(input) {
  	input.forEach(function(pack, packIndex)  {
  		if(bad(pack)) {
       			input[packIndex] = input[packIndex].map(num => num + 2);
  		} else {
  			if(rotten(pack)) 
	  			input.splice(input.indexOf(pack), 1);
  		}
  	});
  	
  	return input;
  }

 //  if(pack.includes(0) || pack.includes(2)) {
 //  	console.log(pack, packIndex, 'is bad')
	// } else if(pack.includes(0) && pack.includes(2)) {
	// 		console.log(pack, packIndex, 'is rotten');
	// } else {
	// 	console.log(pack, packIndex, 'is good');
	// }
  
  	

  // console.log(badApples(input));

// _________________________________________________________________________________________

  // Codewar 2 

//   Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge. 
// Don't forget the space after the closing parentheses!

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  const countryCode = `(${numbers.slice(0, 3).join('')}) `;
  const fhalf = numbers.slice(3, 6).join('');
  const shalf = `-${numbers.slice(6).join('')}`
  const phoneNumber = countryCode.concat(fhalf, shalf);
  return phoneNumber;
}

// console.log(createPhoneNumber(numbers));

//                     // OR

function PhoneNumber(digit) { 
  return "("+digit.substr(0, 3)+")" + " " + digit.substr(3, 3) + "-" + digit.substr(6, 4);
}

// const digit = "1234567890";

// console.log(PhoneNumber(digit));


      // CODEWAR 3 - BUILDTOWER
// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
  let tower = [], space, star;
  for (let i = 1; i <= nFloors; i++) {
    space = " ".repeat(nFloors -i);
    star = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}

// console.log(towerBuilder(6));

  // CODEWAR 4

//   In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

  // CODEWAR 5

//   This time we want to write calculations using functions and get the results. Let's have a look at some examples'

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand

// -----------------------------------------

// First calculation function i wrote 

function zero(op) { 
  if(op) {return op(0)}
    return 0;
}

function one(op) { 
  if(op) {return op(1)}
    return 1;
}

function two(op) {
  if(op) {return op(2)}
    return 2;
}

function three(op) {
  if(op) {return op(3)}
    return 3;
}

function four(op) {
  if(op) {return op(4)}
    return 4;
}

function five(op) {
  if(op) {return op(5)}
    return 5;
}

function six(op) {
  if(op) {return op(6)}
    return 6;
}

function seven(op) {
  if(op) {return op(7)}
    return 7;
}

function eight(op) { 
  if (op)
   return op(8)
  return 8;
}

function nine(op) {
  if(op) {return op(9)}
    return 9;
}

// ========================================

// Second calculation function I wrote 

var n = dig => op => op ? op(dig) : dig;

const zero = n(0);
const one = n(1);
const two = n(2);
const three = n(3);
const four = n(4);
const five = n(5);
const six = n(6);
const seven = n(7);
const eight = n(8);
const nine = n(9);
const ten = n(10);
const eleven = n(11);

const plus = val1 => val2 => val2 + val1;
const minus = val1 => val2 => val2 - val1;
const times = val1 => val2 => val2 * val1;
const dividedBy = val1 => val2 => val2 / val1;

// // --=========-------=============--------======

// // First Operation function I wrote 

// minus(val1) {
//   return function(val2) {
//     return val2 - val1;
//   }
// }

// function times(val1) {
//   return function(val2) {
//     return val2 * val1
//   }
// }

// function dividedBy(val1) {
//   return function(val2) {
//     return val2 / val1;
//   }
// }

// // Test case 
// console.log(eleven(times(two())));
// console.log(nine(plus(two())));
// console.log(nine(minus(two())));
// console.log(nine(dividedBy(two())));

// ========================================================================

  // CODEWAR 6 
  
  // TORTOISE RACE 

//   When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (don't worry for fractions of second).

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin.

// Examples
// race(720, 850, 70) => [0, 32, 18]
// race(80, 91, 37)   => [3, 21, 49]
// Note: you can see some other examples in "Your test cases".

  // SOLUTION TO TORTOISE RACE (not solved)

  // speed is in per hour 
  // v1 = 720, d1 = ?, 
  // v2 = 850, d2, = ?, 
  // v1 = d1 / t1, 
  // var seconds;
  // function race(v1, v2, g) {
  //   const t1 = g / v1;
  //   const time = getTime(v1, t1, v2);
  //   seconds = time;
  //   return seconds;
  // }

  // function getTime(v1, t1, v2) {
  //   var t2 = (v2 * t1) / (v2 - v1);
  //   return v2;
  // }

  // console.log(race(720, 850, 70));

// ===================================================
// ORDER WEIGHT

// var weight = "57 63 199 38 93 21";

// function orderWeight(string) {
//   return string.split(' ')
//     .map((v) => {
//       return {
//         val: v,
//         key: v.split('').reduce((a, b) => {
//           return parseInt(a) + parseInt(b);
//         })
//       }
//     })
//     .sort((a, b) => a.key == b.key ? a.val.localeCompare(b.val) : (a.key - b.key))
//     .map((a) => a.val)
//     .join(" ")
// }

function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function(v) {  
      return {
        val: v,
        key: v.split("").reduce(function(prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function(a, b) {
      return a.key == b.key 
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function(v) {
      return v.val;
    })
    .join(" ");
}

function orderWeight(string) {
  return string.split(' ')
    .map((v) => {
      return {
        val: v,
        key: v.split("").reduce((prev, curr) => {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      }
    })
    .sort((a, b) => {
      return a.key == b.key
          ? a.val.localeCompare(b.val)
          : (a.key > b.key);
    })
    .map((m) => {
      return m.val;
    });
    console.log(s);
    .sort((a, b) => {
      return a.key == b.key
    })
}

// console.log(orderWeight(weight));

// =========================================================

// ARRAY OF ARRAYS

// function getLengthOfMissingArray(arrayOfArrays) {
//   if(arrayOfArrays.length <= 1) {
//     return 0;
//   }

//   let arrayOfLength = arrayOfArrays.sort((a, b) => a.length > b.length ? 1 : -1)
//     .map((array) => array.length);

//   for(let i = 0; i < arrayOfLength.length; i++) {
//     let first = arrayOfLength[i];
//     let diff = arrayOfLength[i + 1] - first;
//     if(diff !== 1) {
//       return first + 1;
//     }
//   }
// }

// OR 

function getLengthOfMissingArray(arrayOfArrays) {
  let arrayOfLength =  arrayOfArrays.length > 0 ? 
    arrayOfArrays.sort((a, b) => { return a.length > b.length ? 1 : -1})
    .map((a) => { return a.length; }) : 0;

    for(let i = 0; i < arrayOfLength.length; i++) {
      let first = arrayOfLength[i];
      let diff = arrayOfLength[i + 1] - first;
      if(diff != 1) {
        return first + 1;
      }
    }
}

// console.log(getLengthOfMissingArray( [ [1, 4, 3, 9, 0], [ 4, 5, 1, 5], [ 1, 3, 4], [ 5, 6, 7, 8, 5, 4, 2]]));

// ==================================================================================================================

// STRING INCREMENTAL

// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//   let match, zeros, number, retNum;

function incrementString (strng) {
  match = strng.match(/(\d+)$/);
  zeros = strng.match(/(0*)\d+?$/);
  if(match === null) {
    return strng+1;
  }

   number = Number(match[0]) + 1;

  if(zeros[1].length > 1) {

    retNum = zeros[1] + number;   
  } else {
    retNum = number;
  }

  return strng.replace(match[0], retNum);
}

// console.log(incrementString('foobar00999'));

function num_to_word(N) {
 let array = String(N).split('');
 let result = '';
 for(let i = 0; i < array.length; i++) {
   switch(array[i]) {
     case '0':
       result += " zero ";
       break;
     case '1':
       result += " one";
       break;
     case "2":
       result += " two";
       break;
     case '3':
       result += " three";
       break;
     case '4':
       result += " four";
       break;
     case '5':
       result += " five";
       break;
     case '6':
       result += " six";
       break;
     case '7':
       result += " seven";
       break;
     case '8':
       result += " eight";
       break;
     case '9':
       result += " nine";
       break;
     default:
       result += " unknown number";
       break;
   }
 }
 console.log( result );
}

// num_to_word(234589250891);

// ===================================================

// SUM OF DIGITS

function sum_of_digits(A) {
 return A.map((v) => {
   return String(v);
 })
 .map((v) => {
   return v.split("").reduce((a, b) => {
     return Number(a) + Number(b);
   })
 })
 .reduce((a, b) => {
   return Number(a) + Number(b);
 })
}

// console.log(sum_of_digits([10, 20, 3, 5, 6, 23]));

// ===========================================================================================

// SORT THE ODD

function isOdd(n) {
  return n % 2 == 1;
}

function sortArray(array) {
  let arr = array.slice();
  let originalArray = array.slice();
  let oddArray = [];

  for(let i = 0; i < arr.length; i++) {
    if(isOdd(arr[i])) {
      oddArray.push(arr[i]);
    }
  }

  oddArray = oddArray.sort((a, b) => a > b ? 1 : -1);

  for(let i = 0; i < originalArray.length; i++) {
    if(isOdd(originalArray[i])) {
      let temp = Number(oddArray.splice(0, 1));
      originalArray[i] = temp;
    }
  }

  return originalArray;
}


// console.log(sortArray([5, 3, 2, 8, 1, 4]))

// ==============================================================

// MAKE A FUNCTION THAT DOES ARITHMETIC

function arithmetic(a, b, operator){
  switch (operator) {
    case "add":
      return plus(a, b);
      break;
    case "subtract":
      return subtract(a,b);
      break;
    case "multiply":
      return multiply(a,b);
      break;
    case "divide":
      return divide(a, b);
      break;
  }
}

function plus(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// ===================================================

// PRINTER ERROR
function printerError(s) {
  const denominator = s.length;
  const printerDefault = /[a-m]/g;
  let error = 0;
  for(c of s) {
    if(!(c.match(printerDefault))) {
      error++;
    }
  }
  return `${error}/${denominator}`;
}

// const s = "aaabbbbhaijjjm";
// const z = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"

// console.log(printerError(z));


// ===============================================================================

// COUNTING DUPLICATES

function duplicateCount(text) {
  let count = 0;
  let duplicates = [];
  if(text.length <= 1) {
    return count;
  }
  text = text.toLowerCase();

  for(let i = 0; i < text.length; i++) {
    for(let j = 0; j < text.length; j++) {
      if(j !== i && text[j] === text[i] && duplicates.indexOf(text[j]) == -1) {
        duplicates.push(text[j]);
        count++;
      }
    }
  }
  console.log(duplicates);
  return count;
}

// console.log(duplicateCount("abcdefghabcdabcABAB"));


// ===========================================================

// PARTLIST 

function partlist(arr) {
  let oriArr = arr.slice();
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(i == arr.length - 1) {
      return newArr;
    }

    let pivot = i;
    let j = 1;
    let array = [oriArr.slice(0, pivot+1), oriArr.slice(pivot+1, 1).concat(oriArr.slice(pivot+2))];
    newArr.push(array);
  }
  return newArr;
}

// console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));

// ============================================================

// Multi-tap Keypad Text Entry on an Old Mobile Phone

function presses(phrase) {
  let count = 0;
  for(let i = 0; i < phrase.length; i++) {
    let letter = phrase[i].toUpperCase();
    for(let key of buttons) {
      if(key.alpha.indexOf(letter) >= 0) {
        let press =  key.alpha.indexOf(letter) + 1;
        count += press;
      }
    }
  }

  return count;
}

const buttons = [
  {num: 1, alpha: ["1"]},
  {num: 2, alpha: ["A", "B", "C", "2"]},
  {num: 3, alpha: ["D", "E", "F", "3"]},
  {num: 4, alpha: ["G", "H", "I", "4"]},
  {num: 5, alpha: ["J", "K", "L", "5"]},
  {num: 6, alpha: ["M", "N", "O", "6"]},
  {num: 7, alpha: ["P", "Q", "R", "S", "7"]},
  {num: 8, alpha: ["T", "U", "V", "8"]},
  {num: 9, alpha: ["W", "X", "Y", "Z", "9"]},
  {num: 0, alpha: [" ", "0"]}
];

// console.log(presses("WHERE DO U WANT 2 MEET L8R"));

// ==================================================

// SNAIL

function snail(array) {
  const result = [];
  while(array.length) {
    result = (result ? result.concat(array.shift()) : array.shift());

    for(let i = 0; i < array.length; i++) 
      result.push(array[i].pop());
    
    result = result.push(array.pop().reverse());

    for(let i = array.length -1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }

  return result;
}

// let array = [[1,2,3], [8, 9, 4], [7, 6, 5]];
let array = [[1,2,3, 1], [4, 5, 6, 4], [7, 8, 9, 7], [7, 8, 9, 7]];
console.log(snail(array));
*/

// STRIP COMMENTS 
// not solved
function solution(input, markers){
  let marker = markers.join("");
  console.log(marker);
  let express = `[${marker}](.+)?|${marker}`;
  let re =  new RegExp(express, "gi");
  let strippedInput = input.replace(re, "");
  console.log(strippedInput.length);
  return strippedInput;
}

// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));


function generateHashtag(str) {
  if(str == null || str.length < 1) return false;

    str = str.split(' ')
    .filter(word => word != "")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');

    let tag = '#' + str;
    if(tag.length > 140) return false;
    return tag;
}

console.log(generateHashtag('Hello  there thanks for trying my Kata'));

let str = 'Hello    there  thanks  for trying my Kata';

str = str.split(' ').filter(word => word !== "");

// console.log(str);