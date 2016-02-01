//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. 
//Have the values to those keys be your favorite thing in that category. 

var paige = {
  band: 'Fall Out Boy', 
  food: 'Anything Sweet',
  person: 'Tye',
  book: 'The Host',
  movie: 'Pride and Prejudice',
  holiday: 'Christmas'
}

//After you've made your object, add another key named 'car' with the value being your favorite car 
//and then another key named 'brand' with the value being your favorite brand.

paige.car = 'Jeep';
paige.brand = 'Brand of what?';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in 
//your favoriteThings object to be '50 Shades of Gray'. 

paige.food = 'Lettuce';
paige.book = '50 Shades of Gray'


//Now, alert your favorite person, then alert your favorite book.

alert(paige.person);
alert(paige.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. 
//If it's not truthy, remove it from the object. hint: 'delete'.

for (var i in user) {
  if (user[i] === null || user[i] === undefined || user[i] === 0) {
  // test[i] === undefined is probably not very useful here
    delete user[i];
  }
}

//Once you get your truthy object, Change the remaining values in the object to be specific to you 
//(name: 'your name', username: 'your username'), rather than my information.

user.name = 'Paige';
user.username = 'pviehweg';

//Now console.log your object and make sure it looks right.

 console.log(user);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. 
//One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function() {
  alert('hello');
}

methodCollection.logHello = function() {
  console.log('hello');
}
//Now call your alertHello and logHello methods. 

methodCollection.logHello();
methodCollection.alertHello();

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being 
//all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var davowels = 'This is a test';
var voweler = function(string) {
  var lower = string.toLowerCase()
  var arr = lower.split("");
  var obj = {a: 0, e: 0, i: 0, o: 0, u: 0}
  for (var i = arr.length; i >= 0; i--) {
    if (arr[i] === "a") {
      obj.a += 1;
    };
    if (arr[i] === "e") {
      obj.e += 1;
    };
    if (arr[i] === "i") {
      obj.i += 1;
    };
    if (arr[i] === "o") {
      obj.o += 1;
    };
    if (arr[i] === "u") {
      obj.u += 1;
    };
  }
  return obj;
}

voweler(davowels);



A different way to do it: With less code. 
function voweler(str) {
   var vowels = 'aeiouAEIOU', 
   vowelObj = {a: 0, e: 0, i: 0, o: 0, u: 0};
   for (var i in str) { 
    if (vowels.includes(str[i])) { 
      var cur = str[i].toLowerCase(); 
      vowelObj[cur] += 1}
}
return vowelObj;
}

voweler('yOur mom goes to college');
