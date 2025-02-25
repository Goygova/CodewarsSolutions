/*6 kyu Sum of Digits / Digital Root Solution.
https://www.codewars.com/kata/541c8630095125aba6000c00
*/
function digital_root(n) {
	return ((n - 1) % 9) + 1;
}

/* 7 kyu Mumbling / Solution 
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039 */

function accum(s) {
	let newStr = '';
	for (let i = 0; i < s.length; i++) {
		newStr += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + '-';
	}
	return newStr.substring(0, newStr.length - 1);
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
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] === array2[i]) {
			score += 4;
		} else if (array2[i] === '') {
			score += 0;
		} else {
			score -= 1;
		}
	}
	return score < 0 ? 0 : score;
}

//8 kyu Switch it Up!/Solution
//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(number) {
	switch (number) {
		case 0:
			return 'Zero';
			break;
		case 1:
			return 'One';
			break;
		case 2:
			return 'Two';
			break;
		case 3:
			return 'Three';
			break;
		case 4:
			return 'Four';
			break;
		case 5:
			return 'Five';
			break;
		case 6:
			return 'Six';
			break;
		case 7:
			return 'Seven';
			break;
		case 8:
			return 'Eight';
			break;
		case 9:
			return 'Nine';
			break;
	}
}

//7 kyu Get list sum recursively
//https://www.codewars.com/kata/57a84137cf1fa5f9f80000d6

function sumR(x) {
	if (x.length === 0) {
		return 0;
	}
	return x.shift() + sumR(x);
}

// 7 kyu Discover The Original Price/Solution
//https://www.codewars.com/kata/discover-the-original-price/javascript

function discoverOriginalPrice(discountedPrice, salePercentage) {
	return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}

// 7 kyu Find the divisors!/Solution
//https://www.codewars.com/kata/find-the-divisors/javascript

function divisors(integer) {
	let arr = [];
	for (let i = 2; i < integer; i++) {
		if (integer % i === 0) {
			arr.push(i);
		}
	}
	return arr.length === 0 ? `${integer} is prime` : arr;
}

//Find smallest angle (from interview)

console.log(smallest_angle(3, 0)); // 90
console.log(smallest_angle(6, 0)); // 180
console.log(smallest_angle(9, 30)); // 90
console.log(smallest_angle(3, 30)); //

function smallest_angle(a, b) {
	//1 hour = 30, 1 min = 6
	let totalDegrees = 360;
	let totalHours = 12;
	let totalMin = 60;

	let degreesInHour = totalDegrees / totalHours; // 30
	let degreeInMin = totalDegrees / totalMin; // 6

	return Math.abs(a * degreesInHour - b * degreeInMin);
}

//6 kyu Find The Parity Outlier/ Solution
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
	let oddCount = 0;
	let evenCount = 0;
	let oddNum = 0;
	let evenNum = 0;
	for (let i = 0; i < integers.length; i++) {
		if (integers[i] % 2 !== 0) {
			oddCount++;
			oddNum = integers[i];
		} else {
			evenCount++;
			evenNum = integers[i];
		}
	}
	return oddCount > evenCount ? evenNum : oddNum;
}

//6 kyu Vasya - Clerk/ Solution
//https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

function tickets(peopleInLine) {
	let bill25 = 0;
	let bill50 = 0;
	let bill100 = 0;
	for (let i = 0; i < peopleInLine.length; i++) {
		switch (peopleInLine[i]) {
			case 25:
				bill25++;
				break;
			case 50:
				if (bill25 > 0) {
					bill50++;
					bill25--;
				} else {
					return 'NO';
				}
				break;
			case 100:
				if (bill50 > 0 && bill25 > 0) {
					bill50--;
					bill25--;
				} else if (bill25 > 2) {
					bill25 -= 3;
				} else {
					return 'NO';
				}
				break;
		}
	}
	return 'YES';
}

// 4 kyu Sum Strings as Numbers/Solution
//https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a, b) {
	let sumStr = '';
	let biggerNum = a.length > b.length ? a : b;
	let smallerNum = a.length > b.length ? b : a;
	let diff = biggerNum.length - smallerNum.length;
	smallerNum = '0'.repeat(diff) + smallerNum;
	let addition = 0;
	for (let i = biggerNum.length - 1; i >= 0; i--) {
		let digit1 = biggerNum[i];
		let digit2 = smallerNum[i];
		let sum = Number(digit1) + Number(digit2) + addition;
		if (sum > 9) {
			addition = 1;
			if (sum === 10) {
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
	if (typeof num !== 'number' || num < 0 || num % 1 != 0) {
		return 'Not valid';
	}
	let isPalindrome = false;
	let numToStr = num.toString();
	for (let i = 0; i < numToStr.length; i++) {
		if (numToStr[i] === numToStr[i + 1] || numToStr[i] === numToStr[i + 2]) {
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
	for (let i = 0; i < sortArr.length - 1; i++) {
		sum += arr[i] - arr[i + 1];
	}
	return sum;
}

//8 kyu Removing Elements/ Solution
//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr) {
	return arr.filter((el, index) => index % 2 === 0);
}

//8 kyu Add Length/ Solution
//https://www.codewars.com/kata/559d2284b5bb6799e9000047

function addLength(str) {
	let arr = [];
	let arr2 = str.split(' ');
	for (let i = 0; i < arr2.length; i++) {
		arr.push(arr2[i] + ' ' + arr2[i].length);
	}
	return arr;
}

//6 kyy Title Case/Solution
//https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
	if (!minorWords) {
		minorWords = '';
	}
	if (title === '') {
		return '';
	}
	let newArr = [];
	let titleArr = title.split(' ').map(word => word.toLowerCase());
	let minorWordsArr = minorWords.split(' ').map(word => word.toLowerCase());
	newArr.push(titleArr[0][0].toUpperCase() + titleArr[0].slice(1));
	for (let i = 1; i < titleArr.length; i++) {
		if (minorWordsArr.includes(titleArr[i])) {
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
	let numbers2 = [...numbers];
	let numbersCopy = [...numbers];
	numbers2.sort((a, b) => a - b);
	let removeInd = numbersCopy.indexOf(numbers2[0]);
	numbersCopy.splice(removeInd, 1);
	return numbersCopy;
}

//6 kyu Alphabetized/ Solution
//https://www.codewars.com/kata/5970df092ef474680a0000c9
function alphabetized(s) {
	s = s.replace(/[^A-Z]/gi, '');
	s = s.split('');
	s = s.map((a, i) => [a, i]);
	s = s.sort((a, b) =>
		a[0].toLowerCase().charCodeAt(0) > b[0].toLowerCase().charCodeAt(0)
			? 1
			: a[0].toLowerCase().charCodeAt(0) < b[0].toLowerCase().charCodeAt(0)
			? -1
			: a[1] - b[1]
	);
	return s.map(a => a[0]).join('');
}

//7 kyu Jaden Casing Strings
//https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function() {
	let newStr = this.split(' ');
	let newArr = [];
	for (let i = 0; i < newStr.length; i++) {
		newArr.push(newStr[i][0].toUpperCase() + newStr[i].substring(1));
	}
	return newArr.join(' ');
};

//6 kyu Find the odd int
//https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
	let obj = {};
	A.forEach(el => (obj[el] ? obj[el]++ : (obj[el] = 1)));
	console.log(obj);
	for (prop in obj) {
		if (obj[prop] % 2 !== 0) return Number(prop);
	}
}

//6 kyu Smallest Difference
//https://www.codewars.com/kata/585de79128bc74912d0001c5

function smallestDiff(arr1, arr2) {
	if (arr1.length === 0 && arr2.length === 0) {
		return -1;
	}
	if (arr1.length === 0 || arr2.length === 0) {
		return Math.min(...arr1) > Math.min(...arr2) ? Math.min(...arr2) : Math.min(...arr1);
	}
	let sortArr1 = arr1.sort((a, b) => a - b);
	let sortArr2 = arr2.sort((a, b) => a - b);
	let i = 0;
	let j = 0;
	let minDiff = Infinity;
	while (i < sortArr1.length && j < sortArr2.length) {
		let diff = Math.abs(sortArr1[i] - sortArr2[j]);
		if (diff < minDiff) {
			minDiff = diff;
		}
		if (sortArr1[i] < sortArr2[j]) {
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
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'a') {
			amountOfA++;
		} else if (array[i] === 'b') {
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

String.prototype.camelCase = function() {
	if (this == '') {
		return '';
	}
	let str = this.trim();
	let newStrArr = str.split(' ');
	return newStrArr.map(word => word[0].toUpperCase() + word.substring(1)).join('');
};

// 7 kyu Ordered Count of Characters/Solution
//https://www.codewars.com/kata/57a6633153ba33189e000074
var orderedCount = function(text) {
	let obj = new Map();
	text = text.split('');
	text.forEach(el => (obj.get(el) ? obj.set(el, obj.get(el) + 1) : obj.set(el, 1)));
	let result = Array.from(obj.entries());
	return result;
};

//7 kyu 99 Problems, #1: last in list/Solution
//https://www.codewars.com/kata/57d86d3d3c3f961278000005

const last = xs => (xs.length === 0 ? null : xs[xs.length - 1]);

//7 kyu Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
//https://www.codewars.com/kata/572af273a3af3836660014a1
function infiniteLoop(arr, d, n) {
	for (let i = 1; i <= n; i++) {
		if (d === 'left') {
			arr[2].push(arr[0].shift());
			arr[1].push(arr[2].shift());
			arr[0].push(arr[1].shift());
		}
		if (d === 'right') {
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
	nums = nums.map(el => (el > 0 ? el.toString() : ''));
	nums = nums.sort((a, b) => b + a - (a + b)).join('');
	return nums.length > 0 ? nums : '0';
}

//6 kyu Sort odd and even numbers in different order/Solution
//https://www.codewars.com/kata/5a1cb5406975987dd9000028
function sortArray(array) {
	let arrEven = array.filter(el => el % 2 === 0).sort((a, b) => b - a);
	let arrOdd = array.filter(el => el % 2).sort((a, b) => a - b);
	let a2 = array.map(el => (el % 2 ? arrOdd.shift() : arrEven.shift()));
	return a2;
}

//7 kyu Maximum Gap (Array Series #4)/ Solution
//https://www.codewars.com/kata/5a7893ef0025e9eb50000013

function maxGap(numbers) {
	let newNumbers = numbers.sort((a, b) => b - a);
	let maxGap = 0;
	for (let i = 0; i < newNumbers.length - 1; i++) {
		let difference = newNumbers[i] - newNumbers[i + 1];
		if (difference > maxGap) {
			maxGap = difference;
		}
	}
	return maxGap;
}
//8 kyu Bin to Decimal/Solution
//https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
function binToDec(bin) {
	let decimal = parseInt(bin, 2);
	return decimal;
}
//8 kyu Grasshopper - Messi goals function/ Solution
//https://www.codewars.com/kata/55f73be6e12baaa5900000d4
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//6 kyyu Valid Braces/Solution
//https://www.codewars.com/kata/5277c8a221e209d3f6000b56
function validBraces(braces) {
	let stack = [];
	let strEx = '({[';
	let strEx2 = ')}]';
	braces = braces.split('');
	braces = braces.map(el => {
		if (strEx.indexOf(el) >= 0) {
			stack.push(el);
			return true;
		} else {
			let rem = stack.pop();
			return strEx.indexOf(rem) == strEx2.indexOf(el);
		}
	});
	braces = braces.every(el => el) && stack.length == 0;
	return braces;
}
//7 kyu Simple Fun #152: Invite More Women?/Solution
//https://www.codewars.com/kata/58acfe4ae0201e1708000075
function inviteMoreWomen(L) {
	let menCount = 0;
	let womenCount = 0;
	L.forEach(el => (el > 0 ? menCount++ : womenCount++));
	return womenCount < menCount;
}
//8 kyu Closest elevator/Solution
//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
function elevator(left, right, call) {
	return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}
//8 kyu Filter out the geese/ Solution
//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function gooseFilter(birds) {
	var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
	let newArr = birds.filter(word => !geese.includes(word));
	return newArr;
}
//8 kyu Is there a vowel in there?/Solution
//https://www.codewars.com/kata/57cff961eca260b71900008f
function isVow(a) {
	let newArr = [];
	let arrVow = ['a', 'e', 'i', 'o', 'u'];
	arrVow = arrVow.map(function(letter) {
		return letter.charCodeAt(0);
	});
	for (let i = 0; i < a.length; i++) {
		if (arrVow.includes(a[i])) {
			newArr.push(String.fromCharCode(a[i]));
		} else {
			newArr.push(a[i]);
		}
	}
	return newArr;
}
//7 kyu Sort Out The Men From Boys/Solution
//https://www.codewars.com/kata/5af15a37de4c7f223e00012d
function menFromBoys(arr) {
	arr = arr.filter((el, index) => arr.indexOf(el) === index);
	let evenArr = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
	let oddArr = arr.filter(num => num % 2).sort((a, b) => b - a);
	return evenArr.concat(oddArr);
}
//7 kyu Interweaving strings and removing digits/Solution
//https://www.codewars.com/kata/588a7d45019c42be61000009
function interweave(s1, s2) {
	s1 = s1.split('');
	s2 = s2.split('');
	let s3 = s1.concat(s2);
	let newArr = [];
	for (let i = 0; i < s3.length; i++) {
		if (i % 2 === 0) {
			newArr.push(s1.shift());
		} else {
			newArr.push(s2.shift());
		}
	}
	return newArr.filter(el => !Number(el) && el != '0').join('');
}
//7 kyu The Office II - Boredom Score/Solution
//https://www.codewars.com/kata/57ed4cef7b45ef8774000014

function boredom(staff) {
	let obj = {
		accounts: 1,
		finance: 2,
		canteen: 10,
		regulation: 3,
		trading: 6,
		change: 6,
		IS: 8,
		retail: 5,
		cleaning: 4,
		'pissing about': 25
	};
	let sum = Object.values(staff)
		.map(el => obj[el])
		.reduce((a, b) => a + b);
	if (sum >= 100) {
		return 'party time!!';
	} else if (sum < 100 && sum > 80) {
		return 'i can handle this';
	} else {
		return 'kill me now';
	}
}
//7 kyu The Office I - Outed/Solution
//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
function outed(meet, boss) {
	let num = Object.values(meet);
	num.push(meet[boss]);
	let amount = Object.keys(meet).length;
	let sum = num.reduce((acc, curr) => acc + curr, 0);
	return sum / amount <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}
//8 kyu Welcome!/Solution
//https://www.codewars.com/kata/577ff15ad648a14b780000e7
function greet(language) {
	let obj = {
		english: 'Welcome',
		czech: 'Vitejte',
		danish: 'Velkomst',
		dutch: 'Welkom',
		estonian: 'Tere tulemast',
		finnish: 'Tervetuloa',
		flemish: 'Welgekomen',
		french: 'Bienvenue',
		german: 'Willkommen',
		irish: 'Failte',
		italian: 'Benvenuto',
		latvian: 'Gaidits',
		lithuanian: 'Laukiamas',
		polish: 'Witamy',
		spanish: 'Bienvenido',
		swedish: 'Valkommen',
		welsh: 'Croeso'
	};
	return obj[language] ? obj[language] : 'Welcome';
}
//7 kyu Last/Solution
//https://www.codewars.com/kata/541629460b198da04e000bb9
function last(list) {
	let lastEl = arguments[arguments.length - 1];
	return lastEl.length > 1 ? lastEl[lastEl.length - 1] : lastEl;
}

//7 kyu Form The Minimum/ Solution
//https://www.codewars.com/kata/5ac6932b2f317b96980000ca
function minValue(values) {
	let newSet = new Set(values);
	newSet = [...newSet];
	let result = newSet
		.map(el => el.toString())
		.sort((a, b) => a + b - (b + a))
		.join('');
	return Number(result);
}
//7 kyu Jumping Number (Special Numbers Series #4)/Solution
//https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed
function jumpingNumber(n) {
	if (n < 10) {
		return 'Jumping!!';
	}
	let isJumping = '';
	let nStr = n.toString();
	for (let i = 0; i < nStr.length - 1; i++) {
		let numI = Number(nStr[i]);
		let nextNumI = Number(nStr[i + 1]);
		if (Math.abs(numI - nextNumI) === 1) {
			isJumping = 'Jumping!!';
		} else {
			isJumping = 'Not!!';
			break;
		}
	}
	return isJumping;
}
//7 kyu Tidy Number (Special Numbers Series #9)/Solution
//https://www.codewars.com/kata/5a87449ab1710171300000fd
function tidyNumber(n) {
	n = n.toString();
	let isTidyNum = true;
	for (let i = 0; i < n.length - 1; i++) {
		if (Number(n[i + 1]) < Number(n[i])) {
			isTidyNum = false;
			break;
		}
	}
	return isTidyNum;
}
// 7 kyu Row Weights/Solution
//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
function rowWeights(array) {
	let team1 = [];
	let team2 = [];
	for (let i = 0; i < array.length; i++) {
		if (i % 2 === 0) {
			team1.push(array[i]);
		} else {
			team2.push(array[i]);
		}
	}
	team1 = team1.reduce((a, b) => a + b, 0);
	team2 = team2.reduce((a, b) => a + b, 0);
	return [team1, team2];
}

//7 kyu Sum of a Beach
//https://www.codewars.com/kata/5b37a50642b27ebf2e000010
function sumOfABeach(beach) {
	beach = beach.toLowerCase();
	let counter = 0;
	counter += (beach.match(/sand/g) || []).length;
	counter += (beach.match(/water/g) || []).length;
	counter += (beach.match(/fish/g) || []).length;
	counter += (beach.match(/sun/g) || []).length;
	return counter;
}
//7 kyu Form The Largest
//https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e
function maxNumber(n) {
	n = n.toString();
	n = n.split('');
	n = n.sort((a, b) => b + a - (a + b)).join('');
	return Number(n);
}
//6 kyu Transform To Prime
//https://www.codewars.com/kata/5a946d9fba1bb5135100007c

function minimumNumber(numbers) {
	let sum = numbers.reduce((a, b) => a + b);
	let newSum = sum;
	while (isPrime(newSum) === false) {
		newSum++;
	}
	return newSum - sum;
}

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
//7 kyu Recursion #1 - Factorial
//https://www.codewars.com/kata/5694cb0ec554589633000036
const factorial = n => {
	if (n >= 1) {
		return n * factorial(n - 1);
	} else {
		return 1;
	}
};
//Recursion #2 - Fibonacci
//https://www.codewars.com/kata/569512b7707bc1b88200002f
const fibonacci = n => {
	if (n >= 3) {
		return fibonacci(n - 1) + fibonacci(n - 2);
	} else {
		return 1;
	}
};
//7 kyu TIY-FizzBuzz
//https://www.codewars.com/kata/5889177bf148eddd150002cc
function tiyFizzBuzz(sentence) {
	if (sentence === ' ') {
		return ' ';
	}
	let newStr = '';
	let dictOfCon = 'BCDFGHJKLMNPQRSTVXZWY';
	let dictOfVowel = 'AEOUI';
	for (let letter of sentence) {
		if (letter === letter.toUpperCase()) {
			if (dictOfCon.indexOf(letter) >= 0) {
				newStr += 'Iron';
			}
			if (dictOfVowel.indexOf(letter) >= 0) {
				newStr += 'Iron Yard';
			}
			if (dictOfCon.indexOf(letter) < 0 && dictOfVowel.indexOf(letter) < 0) {
				newStr += letter;
			}
		} else if (letter === letter.toLowerCase()) {
			if (dictOfVowel.indexOf(letter.toUpperCase()) >= 0) {
				newStr += 'Yard';
			} else {
				newStr += letter;
			}
		}
	}
	return newStr;
}
//7 kyu Anagram Detection
//https://www.codewars.com/kata/anagram-detection/javascript
var isAnagram = function(test, original) {
	return helper(test) === helper(original);
};

function helper(str) {
	return str
		.replace(/[^\w]/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('');
}
//7 kyu Alternate capitalization
//https://www.codewars.com/kata/59cfc000aeb2844d16000075
function capitalize(s) {
	let oddStr = '';
	let evenStr = '';

	for (let i = 0; i < s.length; i++) {
		if (i % 2 === 0) {
			evenStr += s[i].toUpperCase();
		} else {
			evenStr += s[i];
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (i % 2 === 1) {
			oddStr += s[i].toUpperCase();
		} else {
			oddStr += s[i];
		}
	}
	return [evenStr, oddStr];
}
//7 kyu All Star Code Challenge #1
//https://www.codewars.com/kata/5863f97fb3a675d9a700003f/solutions/javascript
function sumPPG(playerOne, playerTwo) {
	return playerOne.ppg + playerTwo.ppg;
}
//solution for Stairs interview task
//recursion
function printStairs(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}
	if (n === stair.length) {
		console.log(stair);
		return printStairs(n, row + 1);
	}
	if (stair.length <= row) {
		stair += '#';
	} else {
		stair += ' ';
	}
	printStairs(n, row, stair);
}
//7 kyu Covfefe
//https://www.codewars.com/kata/592fd8f752ee71ac7e00008a
function covfefe(str) {
	let word = 'covfefe';
	if (str.includes('coverage')) {
		return str.replace(/coverage/g, word);
	} else {
		return (str += ' ' + word);
	}
}
//7 kyu The Poet And The Pendulum
//https://www.codewars.com/kata/5bd776533a7e2720c40000e5
function pendulum(values) {
	let sortArr = values.sort((a, b) => a - b);
	let newArr = [sortArr[0]];
	for (let i = 1; i < sortArr.length; i++) {
		if (i % 2 === 1) {
			newArr.push(sortArr[i]);
		} else {
			newArr.unshift(sortArr[i]);
		}
	}
	return newArr;
}

//Return second largest number in array
let arr = [1, 3, 4, 5, 0, 2]; //second largest(4)

//ex.1
function secondLargest(arr) {
	if (arr.length <= 1) {
		return null;
	}
	arr = arr.sort((a, b) => b - a);
	return arr[1];
}

/* Questions to ask:
1. Could this arr be empty? Yes, return null
2. Could this arr has only one el? Yes, return null
*/

//ex.2
function secondL(arr) {
	let largest = null;
	let secondLargest = null;

	for (num of arr) {
		if (largest == null) {
			largest = num;
		} else if (num > largest) {
			secondLargest = largest;
			largest = num;
		} else if (secondLargest == null) {
			secondLargest = num;
		} else if (num > secondLargest) {
			secondLargest = num;
		}
	}
	return secondLargest;
}
//Compare strings
let str1 = '1232';
let str2 = '201';

function largerNum(str1, str2) {
	return str1.length > str2.length;
}

let str3 = '245';
let str4 = '246';

function largerStr(str3, str4) {
	for (let i = 0; i < str3.length; i++) {
		if (str3[i] == str4[i]) {
			continue;
		} else if (str3[i] > str4[i]) {
			return true;
		} else {
			return false;
		}
	}
	return false;
}

/* Questions:
1. Could the string be empty? No
2. Could they be negative? No
3. Can I convert them with Number? No
4. What if they are the same? return False */

//Linear solution in task where you need to find a pair of numbers that gives 10

let arr = [3, 4, 1, 2, 9];

function findNum(arr) {
	let numbersSeen = {};
	for (num of arr) {
		if (numbersSeen[10 - num]) {
			return (10 - num).toString() + ',' + num.toString();
		} else {
			numbersSeen[num] = 1;
		}
	}
	return 'There is no pair';
}

console.log(findNum(arr));

//Spiral matrix

let matrix = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25]
];

function printSpiral(arr) {
	let direction = 'right';
	let length = arr[0].length * arr.length;
	let row = 0;
	let column = 0;
	let dict = {};
	for (let i = 0; i < length; i++) {
		console.log(arr[row][column]);
		dict[arr[row][column]] = true;

		if (direction === 'right' && arr[row][column + 1] !== undefined && !dict[arr[row][column + 1]]) {
			column++;
		} else if (direction === 'down' && arr[row + 1] !== undefined && !dict[arr[row + 1][column]]) {
			row++;
		} else if (direction === 'left' && arr[row][column - 1] !== undefined && !dict[arr[row][column - 1]]) {
			column--;
		} else if (direction === 'up' && arr[row - 1][column] !== undefined && !dict[arr[row - 1][column]]) {
			row--;
		} else {
			direction = getNextDirection(direction);
			if (direction === 'down') {
				row++;
			} else if (direction === 'left') {
				column--;
			} else if (direction === 'up') {
				row--;
			} else if (direction === 'right') {
				column++;
			}
		}
	}
}

function getNextDirection(direction) {
	let directions = ['right', 'down', 'left', 'up'];
	let index = directions.indexOf(direction);
	return directions[index + 1] === undefined ? directions[0] : directions[index + 1];
}

printSpiral(matrix);

//Create spiral matrix

function spiralMatrix(number) {
	let matrix = new Array(number).fill().map(() => new Array(number).fill(''));

	let counter = 1;

	let startRow = 0;
	let endRow = number - 1;
	let columnStart = 0;
	let columnEnd = number - 1;

	while (startRow <= endRow && columnStart <= columnEnd) {
		for (let i = columnStart; i <= columnEnd; i++) {
			matrix[startRow][i] = counter;
			counter++;
		}

		startRow++;

		for (let j = startRow; j <= endRow; j++) {
			matrix[j][columnEnd] = counter;
			counter++;
		}

		columnEnd--;

		for (let i = columnEnd; i >= columnStart; i--) {
			matrix[endRow][i] = counter;
			counter++;
		}

		endRow--;

		for (let i = endRow; i >= startRow; i--) {
			matrix[i][columnStart] = counter;
			counter++;
		}

		columnStart++;
	}

	console.log(matrix);
}

spiralMatrix(4);
