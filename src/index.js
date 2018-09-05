function bad(input) {
 return (input.indexOf(0) !== -1 && input.indexOf(2) !== -1)
}

  // console.log(bad([0, 2]))

  function rotten(input) {
  	return input.every(function(num) {
  		return num == 0;
  	});
  }
  
  // console.log(rotten([0, 0]));

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

// function zero(op) { 
//   if(op) {return op(0)}
//     return 0;
// }

// function one(op) { 
//   if(op) {return op(1)}
//     return 1;
// }

// function two(op) {
//   if(op) {return op(2)}
//     return 2;
// }

// function three(op) {
//   if(op) {return op(3)}
//     return 3;
// }

// function four(op) {
//   if(op) {return op(4)}
//     return 4;
// }

// function five(op) {
//   if(op) {return op(5)}
//     return 5;
// }

// function six(op) {
//   if(op) {return op(6)}
//     return 6;
// }

// function seven(op) {
//   if(op) {return op(7)}
//     return 7;
// }

// function eight(op) { 
//   if (op)
//    return op(8)
//   return 8;
// }

// function nine(op) {
//   if(op) {return op(9)}
//     return 9;
// }

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

function orderWeight(string) {
  return string.split(' ')
    .map((v) => {
      return {
        val: v,
        key: v.split('').reduce((a, b) => {
          return parseInt(a) + parseInt(b);
        })
      }
    })
    .sort((a, b) => a.key == b.key ? a.val.localeCompare(b.val) : (a.key - b.key))
    .map((a) => a.val)
    .join(" ")
}

/*function orderWeight(strng) {
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
}*/

/*function orderWeight(string) {
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
    })
    .sort((a, b) => {
      return a.key == b.key
    })
}*/

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
/*
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
*/
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
// let array = [[1,2,3, 1], [4, 5, 6, 4], [7, 8, 9, 7], [7, 8, 9, 7]];
// console.log(snail(array));


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

// console.log(generateHashtag('Hello  there thanks for trying my Kata'));

// let str = 'Hello    there  thanks  for trying my Kata';

// str = str.split(' ').filter(word => word !== "");

// console.log(str);

// =============================================
// humanReadable kata 

function zeroPad(num) {
  num = num + '';
  if(num.length < 2) return '0'+ num;
  return num;
}

function humanReadable(seconds) {
  let secondsLeft = seconds;
  let hours = zeroPad(Math.floor(seconds / 3600));
  secondsLeft = secondsLeft % 3600;
  let mins = zeroPad(Math.floor(secondsLeft / 60));
  let secs  = zeroPad(secondsLeft % 60);
  return `${hours.length < 2 ? '0'+ hours : hours}:${mins.length < 2 ? '0'+ mins : mins}:${secs.length < 2 ? '0'+ secs : secs}`;
}

// console.log(humanReadable(4362346));

// ============================================================
/*
Math issuses
  Math.floor
  Math.round
  Math.ceil 
*/

Math.round = function(number) {
  if(number - ~~number >= 0.5) return 1 + ~~number;
  return ~~number;
};

Math.ceil = function(number) {
  return (number - ~~number > 0) ? 1 + number : number;
};

Math.floor = function(number) {
  return ~~number;
};

// ============================================================
// Tic-Tac-Toe checker 
const board = [[0, 0, 2],
               [0, 0, 0],
               [1, 0, 1]]

function isSolved(board) {

  for(let i = 0; i <= 2; i++) {
    
    // check for vertically possible wins
    if(board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== 0) {
      return board[0][i];
    }

    // check for horizontal wins
    if(board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== 0) {
     return board[i][0];
    }

    // check for diagonal wins 
    if(board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== 0) {
     return board[0][0];
    }

    // check for other diagonal
    if(board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== 0) {
      return board[0][2];
    }

  }

   // check for empty slots in the board;
  for(let i = 0; i <= 2; i++) {
    for(let j = 0; j <= 2; j++) {
      if(board[i][j] === 0) {
        return -1;
      }
    }
  }

  return 0;

}

// console.log(isSolved(
//   [
//     [0, 1, 1],
//     [2, 0, 2], 
//     [2, 1, 0]
//   ]
// ));

// =============================================================

 // CONVERT STRING TO CAMELCASE 

 function toCamelCase(str) {
    // set matches to uppercase first
    str = str.replace(/[-_](\w)/g, str => str.toUpperCase());
      
    // then replace dashes
    str = str.replace(/([-_])/g, '');

    return str;
 }

 // console.log(toCamelCase('the-stealth-warrior'));

// ========================================================================================

 // simple fun #116: best match

function bestMatch(ALAHLYGoals, zamalekGoals) {
  let matchDiff = [];
  for(let i = 0; i < ALAHLYGoals.length; i++) {
    matchDiff.push({ 
      i: ALAHLYGoals[i] - zamalekGoals[i],
      key: zamalekGoals[i],
      index: i
    });
  }
  matchDiff.sort((a, b) => a.i - b.i);
  let bestMatch = matchDiff[0];
  matchDiff.forEach(match => {
    if(!bestMatch) bestMatch = match;
    if(match.i <= bestMatch.i && match.key > bestMatch.key) bestMatch = match; 
    if(match.i === bestMatch.i && match.key === bestMatch.key && match.index < bestMatch.index) bestMatch = match;   
  });
  return bestMatch.index;
}

// console.log(bestMatch([5,8,9,10,12,12,11,15,8,9,12,8,7,12,4,17,12,9],[3,2,0,4,6,6,5,6,2,4,8,3,1,10,0,8,10,1]));

// =========================================================================================================================

// Phone Directory

function phones(strng, num) {
  let arr = strng.split(/\n/g);
  return arr.reduce((acc, curr, v, arr) => {
    let exactPhoneRegExp = new RegExp(`${num}`, "g");
    let nameRegExp = /\<(\s?\D+\s?\D{0,}\s?)\>/g;
    let phoneRegExp = /\+?(\d{1,2}-\d{3}-\d{3}-\d{4}).?/g;
    let retString = '';
    let phoneArr = [];
    let nameArr = [];
    let addressArr = [];

    for(let i = 0; i < arr.length; i++) {
      let item = arr[i];
      
      if(item.match(nameRegExp) && item.match(exactPhoneRegExp)) {
        let [name, number] = [item.match(nameRegExp)[0].replace(/[<?\>?]/g, "").trim(), item.match(exactPhoneRegExp)[0].replace(/\+?/, "").trim()];
        nameArr.push(name);
        phoneArr.push(number);
        item = item.replace(name, "");
        item = item.replace(number, "");
        addressArr.push(item.replace(/[\+?*:,!$<>;/]+/g, "").trim());
        // console.log(nameArr, phoneArr, addressArr);
      }
    }

    if(!phoneArr.find(p => phoneRegExp.test(p))) return `Error => Not found: ${num}`;
    if(phoneArr.length > 1) return `Error => Too many people: ${num}`;

    retString += `Phone => ${phoneArr[0]}, `;
    retString += `Name => ${nameArr[0]}, `;
    retString += `Address => ${addressArr[0]}`.replace(/\_/g, "").replace(/\s{1,}/g, ' ');

    return retString;
  });
}

const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
+ "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
+ "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
+ "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
+ "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
+ "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
+ "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
+ "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
+ "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
+ "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
+ "<P Salinge> Main Street, +1-098-512-2222, Denve";

  // dr.split(/\n/g).forEach(person => {
  //   let phoneRegExp = /\+?(\d{1,2}-\d{3}-\d{3}-\d{4}).?/g;
  //   let phone = person.match(phoneRegExp);
  //   phone = phone[0].replace(/[!+;,.]/g, "").trim();
  //   console.log(phones(dr, phone));
  // });

// console.log(phone(dr, "48-421-674-8974"))

// let phoneDir = dr.split(/\n/g);

//       // let exactPhoneRegExp = new RegExp(`${num}`, "g");
//       let nameRegExp = /\<(.?\s?\w{0,}\s*?.?\w{0,}\s*?)|(\w{0,})\>/g;
//       let exactPhoneRegExp = new RegExp(`${"1-121-504-8974"}`, "g");
//       let phoneRegExp = /\+(\d{1,2}-\d{3}-\d{3}-\d{4}).?/g;
//       let retString = '';
//       let phoneArr = [];
//       let nameArr = [];
//       let addressArr = [];

//       for(let i = 0; i < phoneDir.length; i++) {
//         let item = phoneDir[i];
//         if(item.match(nameRegExp) && item.match(exactPhoneRegExp)) {
//           let [name, number] = [item.match(nameRegExp)[0].replace(/\<?\>?/g, "").trim(), item.match(exactPhoneRegExp)[0].replace(/\+?\s?/, "").trim()];
//           nameArr.push(name);
//           phoneArr.push(number);
//           item = item.replace(name, "");
//           item = item.replace(number, "");
//           addressArr.push(item.replace(/\+?\<?\>?\s?\W/g, ""));
//           console.log(nameArr, phoneArr, addressArr);
          
//         } 
//       }

// =========================================================================================================================

// BASE CONVERSION ALGORITHM

/*
  In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets. Here are some pre-defined alphabets:
*/

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

const bin = Alphabet.BINARY;
const oct = Alphabet.OCTAL;
const dec = Alphabet.DECIMAL;
const hex = Alphabet.HEXA_DECIMAL;
const allow = Alphabet.ALPHA_LOWER;
const allup = Alphabet.ALPHA_UPPER;
const alpha = Alphabet.ALPHA;
const alpha_num = Alphabet.ALPHA_NUMERIC;

const toBin = convertToBase(2);
const toOct = convertToBase(8);
const toDec = toBase10;
const toHex = convertToBase(16);
const toAlpha = convertToBase(51);
const toAllow = convertToBase(25);
const toAllup = convertToBase(25);
const toAlpha_num = convertToBase(61);

function baseConverter(target) {
   if(target == dec) return toDec;
   let base = target.length;
  return convertToBase(base);
}


function convertToBase(base) {
  var convert = [];
  return function convertTo(number) {
    var num = Number(number);
    convert.unshift(num % base);
    num = Math.floor(num / base);
    if(num <= 0) {
      try { 
        return convert;
      } finally {
        convert = [];
      }
    } 
    return convertTo(num); 
  }
}

// takes in an array of numbers to convert to DECIMAL;
function toBase10(number, base) {
  let convert = 0;
  let num = number;
  if(typeof num === 'string') {
    num = num.split('');
  }
  if(num.length <= 0) return convert;
  for(let i = num.length - 1; i >= 0; i--) {
    convert += (Number(num.shift()) * Math.pow(base, i));
  }
  return convert + '';
}


function displayOutput(output, base) {
  if(typeof output == "object") {
    output = output.map(val => base[val]);
  } else {
    output = base[output];
  }
  return output.join('');
}

function getSourceInput(input, base) {
  return input = input.split('')
    .map(val => base.indexOf(val));
}

function convert(input, source, target) {
  if(source == target) return input;
  let toConvert = input;
  let convertedInput;


  let targetConverter = baseConverter(target); 

  // Handle binary source
  if(source == bin) {
    toConvert = toDec(toConvert, 2);
    if(target == dec) {
      return toConvert;
    } else {
      convertedInput = targetConverter(toConvert);
      return displayOutput(convertedInput, target);  
    }
  }

  if(source == oct) {
    toConvert = toDec(toConvert, 8);
    if(target == dec) return toConvert;
    convertedInput = targetConverter(toConvert);
    return displayOutput(convertedInput, target);
  }

  // get inputs number to convert for any case type that doesn't match the above;
  toConvert = getSourceInput(toConvert, source);
  // if(target == dec) return toDec(toConvert, source.length);
  toConvert = toDec(toConvert, source.length);
  convertedInput = targetConverter(toConvert);
  return displayOutput(convertedInput, target);
}

// ============================================================================================
    // CLOSET AND SMALLEST 
/*
Input



/*	algorithm for solution 
	1. check for valid length
	2. split string into array
	3. map corresponding elements to extract details into {weigth: "sum of it's digits", index: num}
	4. sort mapped output using their weights
	5. check for bestMatch with respect to difference in their weights
	6. form the output array with the bestMatch found
	7. return output.
	
*/
/*
function closest(strng) {
    var array = strng.split(' ');
    var weight = array.map( e => {
      return e.split('').reduce( (p,a) => Number(p)+Number(a) )
    });
    
    var arr = weight.sort((a,b) => a - b)
    var dif = arr[1]-arr[0];
    var solution = [arr[0], arr[1]];
    arr.forEach( (e,i) => {
      if(e[i+1] - e < dif) {
        dif = e[i+1] - e
        solution = [e[i+1], e];
        console.log(i)
      }
    })
    console.log(dif)
    console.log(solution)
    return [[solution[0], array.indexOf(solution[0]), array[weight.indexOf(solution[0])]], [solution[1], array.indexOf(solution[1]), array[weight.indexOf(solution[1])]]]
}

var strng = "103 123 4444 99 2000"
// console.log(closest(strng1));
*/


function closest(strng) {
  if(strng.length > 0 && strng.length < 2) return [];
  console.log(strng);
  const strngArray = strng.split(' ');
  let diff = -1;
  let retArray = [];
  let retArrayPrev, retArrayNext;
  strng = strng.split(' ')
  	.map((num, idx) => {
  		return {
  			weight: addString(num),
  			index: idx,
  			num: num
  		}
  	})
  	.sort((a, b) => a.weight - b.weight)
  console.log(strng);
  for(let idx in strng) {
  	idx = Number(idx);
  	if(idx === strng.length -1) break;
  	let prev = strng[idx];
  	let next = strng[idx+1];
  	console.log(prev, next);
  	if(diff < 0) {
  		diff = next.weight - prev.weight;
  		retArrayPrev = prev;
  		retArrayNext = next;
  		retArray = [
  			[prev.weight, prev.index, prev.num], 
  			[next.weight, next.index, next.num]
  		];
  	} else {
	  		let currDiff = next.weight - prev.weight;
	  		console.log('current diff is:', currDiff);
	  		if(currDiff < diff) {
	  			console.log('lesser')
	  			retArray = [
	  				[prev.weight, prev.index, prev.num], 
	  				[next.weight, next.index, next.num]
	  			];
	  			retArrayPrev = prev;
	  			retArrayNext = next;
  			} else if((currDiff === 0) || (currDiff === diff)) {
	  			console.log('zero or lesser');
	  			if((prev.index < retArrayPrev.index) || (next.index < retArrayNext.index)) {
	  				retArray = [
	  					[prev.weight, prev.index, prev.num],
	  					[next.weight, next.index, next.num]
	  				];
	  				retArrayPrev = prev;
	  				retArrayNext = next;
	  				continue;
	  			}
	  		}	
  		}
		}
  return retArray;
}
 
// Helper function to addup string of numbers
function addString(strng) {
	return strng.split('')
	.reduce((a, b) => Number(a) + Number(b), 0);
}


// else if((currDiff === diff) && ( (prev.index < retArray[0][1]) || (next.index < retArray[1][1]) )) {
// 	  			if(prev.weight < retArrayPrev.weight || next.weight < retArrayNext.weight){
// 	  				retArray = [
// 	  					[prev.weight, prev.index, prev.num], 
// 	  					[next.weight, next.index, next.num]
// 	  				];
// 	  			}
// 	  			console.log('equals, parse index')
// 	  		}



// Test for closet;
const strng1 = "103 123 4444 99 2000";
const strng2 = "80 71 62 53";
const strng3 = "444 2000 445 544";
const strng4 = "444 2000 445 644 2001 1002" //closest("444 2000 445 644 2001 1002") --> [[3, 4, 2001], [3, 5, 1002]]
const strng5 = "239382 162 254765 182 485944 468751 49780 108 54"; // [[9, 1, 162], [9, 7, 108]]
const strng6 = "54 239382 162 254765 182 485944 468751 49780 108";
const strng7 = "239382 162 254765 182 485944 134 468751 62 49780 108 54"
console.log(closest("315411 165 53195 87 318638 107 416122 121 375312 193 59"));

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