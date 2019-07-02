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

//8 kyu Switch it Up!/Solution//
//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031//

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

//7 kyu Get list sum recursively//
//https://www.codewars.com/kata/57a84137cf1fa5f9f80000d6//

function sumR(x) {
  if(x.length === 0){
    return 0;
  }
   return x.shift() + sumR(x);
  }

  
// 7 kyu Discover The Original Price/Solution//
//https://www.codewars.com/kata/discover-the-original-price/javascript//

function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}

// 7 kyu Find the divisors!/Solution//
//https://www.codewars.com/kata/find-the-divisors/javascript//

function divisors(integer) {
  let arr = [];
  for(let i = 2; i < integer; i++){
    if(integer % i === 0){
      arr.push(i);
    }
  }
  return arr.length === 0 ? `${integer} is prime` : arr;
};
