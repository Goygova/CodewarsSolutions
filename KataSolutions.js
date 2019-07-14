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

/* 6 kyu Numerical Palindrome #2/ Solution
https://www.codewars.com/kata/58de819eb76cf778fe00005c */


function palindrome(num) {
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
};

//6 kyy Title Case/Solution
//https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
  if(!minorWords){
    minorWords = '';
  }
  if(title === ''){
    return '';
  }
  let newArr = [];
  let titleArr = title.split(' ').map(word => word.toLowerCase());
  let minorWordsArr = minorWords.split(' ').map(word => word.toLowerCase());
  newArr.push(titleArr[0][0].toUpperCase() + titleArr[0].slice(1));
  for(let i = 1; i < titleArr.length; i++){
    if(minorWordsArr.includes(titleArr[i])){
      newArr.push(titleArr[i]);
     } else {
        newArr.push(titleArr[i][0].toUpperCase() + titleArr[i].slice(1));
        }
    }
      return newArr.join(' ');
}

//7 kyu Remove the minimum// Solution
//https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  let numbers2 = [...numbers]
  let numbersCopy = [...numbers];
  numbers2.sort((a, b) => a - b);
  let removeInd = numbersCopy.indexOf(numbers2[0]);
  numbersCopy.splice(removeInd, 1);
  return numbersCopy;
}

//6 kyu Alphabetized/ Solution
//https://www.codewars.com/kata/5970df092ef474680a0000c9
function alphabetized(s) {
  s = s.replace(/[^A-Z]/ig, "");
  s = s.split("");
  s = s.map((a, i) => [a, i]);
  s = s.sort((a, b) => a[0].toLowerCase().charCodeAt(0) > b[0].toLowerCase().charCodeAt(0) ? 1 : a[0].toLowerCase().charCodeAt(0) < b[0].toLowerCase().charCodeAt(0) ? -1 : a[1] - b[1]);
    return s.map(a => a[0]).join("");
}

//7 kyu Jaden Casing Strings
//https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  let newStr = this.split(' ');
  let newArr = [];
  for(let i = 0; i < newStr.length; i++){
    newArr.push(newStr[i][0].toUpperCase() + newStr[i].substring(1));
  }
  return newArr.join(' ');
  };

//6 kyu Find the odd int
//https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  let obj = {};
  A.forEach(el => obj[el] ? obj[el]++ : obj[el] = 1);
  console.log(obj);
  for(prop in obj){
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

//6 kyu Smallest Difference
//https://www.codewars.com/kata/585de79128bc74912d0001c5

function smallestDiff(arr1, arr2) {
  if(arr1.length === 0 && arr2.length === 0){
    return -1;
  }
  if(arr1.length === 0 || arr2.length === 0){
    return Math.min(...arr1) > Math.min(...arr2) ? Math.min(...arr2) : Math.min(...arr1);
  }
  let sortArr1 = arr1.sort((a,b) => a - b);
  let sortArr2 = arr2.sort((a,b) => a - b);
  let i = 0;
  let j = 0;
  let minDiff = Infinity;
  while(i < sortArr1.length && j < sortArr2.length){
    let diff = Math.abs(sortArr1[i] - sortArr2[j]);
    if(diff < minDiff){
      minDiff = diff;
    }
    if(sortArr1[i] < sortArr2[j]){
      i++;
    } else {
      j++;
    }
  }
  return minDiff;
}

//7 kyu Check three and two
//https://www.codewars.com/kata/5a9e86705ee396d6be000091
function checkThreeAndTwo(array) {
  let newArr = [];
    let amountOfA = 0;
    let amountOfB = 0;
    let amountOfC = 0;
    for(let i = 0; i < array.length; i++){
      if(array[i] === 'a'){
        amountOfA++;
      } else if(array[i] === 'b'){
        amountOfB++;
      } else {
        amountOfC++;
      }  
    }
    newArr.push(amountOfA, amountOfB, amountOfC);
    return newArr.includes(3) && newArr.includes(2);
  }

//6 kyu CamelCase Method
//https://www.codewars.com/kata/587731fda577b3d1b0001196/solutions/javascript

String.prototype.camelCase=function(){
  if(this == ""){
    return "";
  }
  let str = this.trim();
  let newStrArr = str.split(' ');
    return newStrArr.map(word => word[0].toUpperCase() + word.substring(1)).join('');
  }

// 7 kyu Ordered Count of Characters/Solution
//https://www.codewars.com/kata/57a6633153ba33189e000074
  var orderedCount = function (text) {
    let obj = new Map();
    text = text.split('');
    text.forEach(el => obj.get(el) ? obj.set(el, obj.get(el) + 1) : obj.set(el, 1));
    let result = Array.from(obj.entries());
      return result;
  }

//7 kyu 99 Problems, #1: last in list/Solution
//https://www.codewars.com/kata/57d86d3d3c3f961278000005

const last = xs => xs.length === 0 ? null : xs[xs.length - 1];
    
//7 kyu Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
//https://www.codewars.com/kata/572af273a3af3836660014a1
function infiniteLoop(arr,d,n){
  for (let i = 1; i <= n; i++){
    if (d === "left"){
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
    if (d === "right"){
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
  }
  
//6 kyu I love big nums and I cannot lie/Solution
//https://www.codewars.com/kata/56121f3312baa28c8500005b
function biggest(nums) {
  nums = nums.map(el => el > 0 ? el.toString() : '')
  nums = nums.sort((a, b) => (b + a) - (a + b)).join('')
  return nums.length > 0 ? nums : '0';
};

//6 kyu Sort odd and even numbers in different order/Solution
//https://www.codewars.com/kata/5a1cb5406975987dd9000028
function sortArray(array) {
  let arrEven = array.filter(el => el % 2 === 0).sort((a, b) => b - a);
  let arrOdd = array.filter(el => el % 2).sort((a, b) => a - b);
  let a2 = array.map(el => el % 2 ? arrOdd.shift() : arrEven.shift())
  return a2;
  }