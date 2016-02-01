var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function(arry) {
	var uhhuh = arry.pop();
	return uhhuh;
}

var showme = last(threeItems);
alert(showme);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

var evenOnly = function(arry2) {
	for (var i = 0; i < arry2.length; i++)
		if (arry2[i] % 2 != 0) {
			arry2.splice(i, 1);
			i--;
		}
	return arry2;	
}
var showevens = evenOnly(evenArray);
console.log(showevens);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. 
//Your job is to write a function that will get a random number, then loop through the array to see if that random number 
//is in the array. If it is, alert true, if it's not, alert false

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var random = getRandomArbitrary();

var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var getlucky = function(arry3, random) {
	if (numbers.indexOf(random) >= 0) {
			return true;
		}
	else {
			return false;
		}
}
var isILucky = getlucky(randomArray, random);
console.log(isILucky);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, 
//first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

var second = first.slice(0)
var adding = second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

var longest = function(stg) {
	var arry4 = stg.split(' ');
	var num = 0
	var word = null;
	for (var i = 0; i < arry4.length -1; i++) {
		if (num < arry4[i].length) {
			num = arry4[i].length;
			word = arry4[i];
		}
	};
	return word;	
}

longest(sentence);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalize(sen) {
   var arr = sen.split(' ');
   for (var i in arr) {
       arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}
return arr.join(' ');
}

capitalize(myPoem);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how 
//many vowels are in that string.
var vowelCounter = function(string) {
	var lower = string.toLowerCase()
    var arr = lower.split("");
	for (var i = arr.length; i >= 0; i--) {
		if (arr[i] != "a" && arr[i] != "e" && arr[i] != "i" && arr[i] != "o" && arr[i] != "u") {
			arr.splice(i, 1);
		};
	}
	console.log(arr.length);
}

vowelCounter(theOdyssey);



// // Better way of doing it: 
// var theOdyssey = "function expression or function declaration? Tis an obvious choice";
// //Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
// function vowelCounter(str) {
//    var vowels = 'aeiouAEIOU';
//    var vowelCount = 0;
//    for (var i of str) {
//        if (vowels.includes(i)) {vowelCount++}
//    }
//    return vowelCount;
// }

// vowelCounter(theOdyssey);