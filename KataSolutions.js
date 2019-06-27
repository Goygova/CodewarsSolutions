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