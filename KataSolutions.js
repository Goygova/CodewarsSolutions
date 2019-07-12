/*6 kyu Sum of Digits / Digital Root Solution.
https://www.codewars.com/kata/541c8630095125aba6000c00
*/
function digital_root(n) {
  return (n - 1) % 9 + 1;
}


/* 7 kyu Mumbling / Solution 
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039 */

function accum(s) {;
  let newStr = '';
  for(let i = 0; i < s.length; i++){
     newStr += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + '-';
  }
 return newStr.substring(0, newStr.length-1);
}

/* 6 kyu Arrays Similar / Solution
https://www.codewars.com/kata/arrays-similar/train/javascript */

function arraysSimilar(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }


  /* 8 kyu Check the exam/ Solution
  https://www.codewars.com/kata/check-the-exam/javascript */
  
  function checkExam(array1, array2) {
let score = 0;
for(let i = 0; i < array1.length; i++){
  if(array1[i] === array2[i]){
    score += 4;
  } else if(array2[i] === ''){
    score += 0;
  } else {
    score -= 1;
  }
}
return score < 0 ? 0 : score;
}

//8 kyu Switch it Up!/Solution
//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(number){
  switch(number){
    case 0: return "Zero";break;
    case 1: return "One";break;
    case 2: return "Two";break;
    case 3: return "Three";break;
    case 4: return "Four";break;
    case 5: return "Five";break;
    case 6: return "Six";break;
    case 7: return "Seven";break;
    case 8: return "Eight";break;
    case 9: return "Nine";break;
  }
}

//7 kyu Get list sum recursively
//https://www.codewars.com/kata/57a84137cf1fa5f9f80000d6

function sumR(x) {
  if(x.length === 0){
    return 0;
  }
   return x.shift() + sumR(x);
  }

  
// 7 kyu Discover The Original Price/Solution
//https://www.codewars.com/kata/discover-the-original-price/javascript

function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}

// 7 kyu Find the divisors!/Solution
//https://www.codewars.com/kata/find-the-divisors/javascript

function divisors(integer) {
  let arr = [];
  for(let i = 2; i < integer; i++){
    if(integer % i === 0){
      arr.push(i);
    }
  }
  return arr.length === 0 ? `${integer} is prime` : arr;
};


//Find smallest angle (from interview)

console.log(smallest_angle(3, 0));  // 90
console.log(smallest_angle(6, 0));  // 180
console.log(smallest_angle(9, 30));  // 90
console.log(smallest_angle(3, 30)); //

function smallest_angle(a, b){
//1 hour = 30, 1 min = 6
let totalDegrees = 360;
let totalHours = 12;
let totalMin = 60;

let degreesInHour = totalDegrees / totalHours; // 30
let degreeInMin = totalDegrees / totalMin // 6

return Math.abs(a * degreesInHour - b * degreeInMin);
}

//6 kyu Find The Parity Outlier/ Solution
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
  let oddCount = 0;
  let evenCount = 0;
  let oddNum = 0;
  let evenNum = 0;
  for(let i = 0; i < integers.length; i++){
    if(integers[i] % 2 !== 0){
      oddCount++;
      oddNum = integers[i];
    } else {
      evenCount++;
      evenNum = integers[i]
    }
  }
   return oddCount > evenCount ? evenNum : oddNum;
}

//6 kyu Vasya - Clerk/ Solution
//https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

function tickets(peopleInLine){
  let bill25 = 0;
  let bill50 = 0;
  let bill100 = 0;
  for(let i = 0; i < peopleInLine.length; i++){
    switch(peopleInLine[i]){
      case 25:
        bill25++;
        break;
      case 50:
        if(bill25 > 0){
          bill50++;
          bill25--;
        }else{
          return 'NO'
        }
        break;
      case 100:
        if(bill50 > 0 && bill25 > 0){
          bill50--;
          bill25--;
        } else if(bill25 > 2){
          bill25 -= 3;
        } else {
          return "NO"
        }
        break;
    }

  }
    return "YES"
}

// 4 kyu Sum Strings as Numbers/Solution
//https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a,b) { 
  let sumStr = '';
  let biggerNum = a.length > b.length ? a : b;
  let smallerNum = a.length > b.length ? b : a;
  let diff = biggerNum.length - smallerNum.length;
  smallerNum = '0'.repeat(diff) + smallerNum;
  let addition = 0;
  for(let i = biggerNum.length - 1; i >= 0; i--){
    let digit1 = biggerNum[i];
    let digit2 = smallerNum[i];
    let sum = Number(digit1) + Number(digit2) + addition;
    if(sum > 9){
      addition = 1;
      if(sum === 10){
        sum = '0';
      } else {
       sum = sum - 10;
      }
    } else {
      addition = 0;
    }
    sumStr = sum + sumStr; 
  }
  let result = addition === 1 ? addition + sumStr : sumStr;
  return result[0] === '0' ? result.substring(1) : result;
  }

  //6 kyu Numerical Palindrome #2/ Solution
  //https://www.codewars.com/kata/58de819eb76cf778fe00005c

  function palindrome(num) {
    console.log(num)
     if(typeof num !== 'number' || num < 0 || num % 1 != 0){
       return 'Not valid'
     }
    let isPalindrome = false;
    let numToStr = num.toString();
    for(let i = 0; i < numToStr.length; i++){
        if(numToStr[i] === numToStr[i+1] || numToStr[i] === numToStr[i+2]){
          isPalindrome = true;
        }
      }
    return isPalindrome;
    }

  // 8 kyu Sum of differences in array/ Solution
  //https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

  function sumOfDifferences(arr) {
    let sortArr = arr.sort((a, b) => b - a);
    let sum = 0;
    for(let i = 0; i < sortArr.length - 1; i++){
      sum += arr[i] - arr[i + 1];
    }
    return sum;
    }

    //8 kyu Removing Elements/ Solution
    //https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

    function removeEveryOther(arr){
      return arr.filter((el, index) => index % 2 === 0);
    }

    //8 kyu Add Length/ Solution
    //https://www.codewars.com/kata/559d2284b5bb6799e9000047

    function addLength(str) {
      let arr = [];
      let arr2 = str.split(' ');
      for(let i = 0; i < arr2.length; i++){
        arr.push(arr2[i] + ' ' + arr2[i].length);
      }
      return arr;
      }
      