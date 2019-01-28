/*var firstname = 'John';
console.log(firstname);
*/
/*************
blah bah
variables
blah
*************/
/******************************************
var lastname = 'Smith';
var age = 28;
var point = false;

var fullage = true;
console.log(fullage);

var job;
console.log(job);


//variable information
job = 'teacher';
console.log(job);
*/

/************************************************
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/****************
*** Basic Operators

var yearJohn, yearMark, year;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - 28;
yearMark = now - 33;
console.log(yearJohn - yearMark);

console.log(now + 2);

console.log(now * 2);
console.log(now / 10);

// Logical Operator
var johnOlder = ageJohn < ageMark;
console.log(johnOlder)

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*************************************************
* OPerator precedence - Which operator is executed first.
*

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMArk = 35;
var average = (ageJohn + ageMArk) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y= (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More Operators
x *= 2; //x = x * 2
console.log(x);
x += 10;
console.log(x);
x++; //x += 1
console.log(x);
x--;
console.log(x);

*/

/************************************
* Coding Challenge 1
***********************************

var johnHeight = 3;
var markHeight = 2;

var johnMass = 70;
var markMass = 50;

var johnBmi = johnMass / (johnHeight * johnHeight);
var markBmi = markMass / (markHeight * markHeight);

var explanation = "Is Mark's BMI higher than John's?";

var comparison = explanation + ' ' + (markBmi > johnBmi);

console.log(comparison);
console.log(markBmi, johnBmi);

*/

/*****************************************************
* If / else Statements
*

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry');
}

var johnHeight = 3;
var markHeight = 2;

var johnMass = 70;
var markMass = 50;

var johnBmi = johnMass / (johnHeight * johnHeight);
var markBmi = markMass / (markHeight * markHeight);

var explanation = "Is Mark's BMI higher than John's?";

if (markBmi > johnBmi) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s')
}
*/

/*******************************************************
* Boolean Logic
*/

/*
var firstname = 'John';
var age = 20;
if (age < 13) {
    console.log(firstname + ' is a boy.');
} else if (age >= 13 && age < 20) { //between 13 and 20
    console.log(firstname + ' is a teenager.');
} else if ( age >= 20 && age < 30) {
    console.log(firstname + ' is a young man.');
} else {
    console.log(firstname + ' is a man');
}

*/

/***********************************************************
* The Ternary Operator and Switch Statements (replacing if/else statements)
*


//ternary operator
var firstname = 'John';
var age = 16

age >= 18 ? console.log(firstname + ' drinks beer')
: console.log(firstname + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice'
}*

//switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'Instructor':
        console.log(firstname + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstname + ' drives an uber in Lisbon')
        break;
    case 'designer':
        console.log(firstname + ' designs beautiful websites')
        break;
    default:
        console.log(firstname + ' does the thing.')
}


age = 17;
switch (true) {
    case age < 13:
        console.log(firstname + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstname + ' is a teenager')
        break;
    case age >= 20 && age < 30:
        console.log(firstname + ' is a young man')
        break;
    default:
        console.log(firstname + 'is a man');
}
*/

/**************************************************************************
** Truthy and Falsy Values and equality operators
*

// Falsy values = undefined, null, 0, '', NaN
// truthy values = all values that are not falsy

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
    } else {
        console.log('Variable has NOT been defined');
    }

// equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/********************************************
** Coding Challenge 2
*

//average of scores
var JohnScore = (89 + 120 + 103) / (3)
var MikeScore = (116 + 94 + 123) / (3)
var MaryScore = (300 + 300 + 300) / (3)


//1.
console.log('Johns Score is ' + JohnScore)
console.log('Mikes Score is ' + MikeScore)
console.log('Marys Score is ' + MaryScore)

//2.
if (JohnScore > MikeScore) {
    console.log('Johns team wins with ' + JohnScore + ' points!');
} else if (MikeScore > JohnScore) {
    console.log('Mikes team wins with ' + MikeScore + ' points!');
} else {
    console.log('Draw');
}

//4.
if (MaryScore > MikeScore && JohnScore) {
    console.log('Marys team wins with ' + MaryScore + ' points!')
}

//Combined
if (JohnScore > MikeScore && JohnScore > MaryScore) {
    console.log('Johns team wins with ' + JohnScore + ' points!');
} else if (MikeScore > JohnScore && MikeScore > MaryScore) {
    console.log('Mikes team wins with ' + MikeScore + ' points!');
} else if (MaryScore > JohnScore && MaryScore > MikeScore) {
    console.log('Marys team wins with ' + MaryScore + ' points!');
} else {
    console.log('There is a draw');
}
*/



/*********************************************************************
** Functions
*

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntil(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
         console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
   
}

yearsUntil(1990, 'John');
yearsUntil(1948, 'Mike');
yearsUntil(1969, 'Jane');

*/



/****************************************************************************
** Function Statements and Expressions
*

//Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab'
        case'designer':
            return firstName + ' designes websites'
        default:
            return firstName + ' Does something else'
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('retired', 'Mark'));
console.log(whatDoYouDo('designer', 'Jane'));

//Function Delcaration
//function whatDoYouDo(job, firstName)

*/


/**********************************************************************************
** Arrays
*

//initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[0]);
console.log(names.length);

//mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different Data Types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

// -1 = not in array
console.log(john.indexOf(23));

//else if john = designer
var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);

*/


/*****************************************************************
** Coding Challenge 3
*

function calcTip(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(calcTip (300));

var bills = [124, 48, 268];
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
var final = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(final);

*/


/**********************************************************************
** Objects and Properties
*

//object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear'
console.log(john[[x]]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastname'] = 'Smith';
console.log(jane);

*/


/****************************************************************************
** Objects and Methods
*

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane','Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};


john.calcAge();
console.log(john);

*/


/*******************************************************************************
** Coding Challenge 4
*


var mark = {
    name: 'Mark',
    mass: 90,
    height: 1.5,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var john = {
    name: 'John',
    mass: 85,
    height: 1.2,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


if (mark.calcBMI() > john.calcBMI()) {
    console.log ('Mark wins with ' + mark.bmi + ' BMI');
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log ('John wins with ' + john.bmi + ' BMI');
}

*/


/*************************************************************************************
** Loops and Iteration
*

for (var i = 0; i <= 20; i++) {
    console.log(i);
}
// i = 0, 0 < 10 true, log i to console, 1++
//i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit loop

var john = ['John', 'Smith', 1990, 'designer', false];

//long way
console.log(john[0])
console.log(john[1])
console.log(john[2])
console.log(john[3])
console.log(john[4]) 

*

//For Loop
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

*

//While Loop
var i = 0;
while (i < john.length) {
    console.log(john[i]); i++;
}

*

console.log(john[0])
console.log(john[1])
console.log(john[2])
console.log(john[3])
console.log(john[4]) 
*

//continue statement
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

//Break Statement
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping Backwards
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}

*/

/************************************************************************
** Coding Challenge 5
*



let john = {
    fullname: 'John',
    bills: [124,48,268,180,42],
    calcTip: function () {
        this.tips = [];
        this.finalvalues = [];
        
        for (var i = 0; i <this.bills.length; i++) {
            
            // determine percentage based on tipping rules
            
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15
            } else {
                percentage = .1
            }
            
            //Add results to the corresponding arrays
            
            this.tips[i] = bill * percentage;
            this.finalvalues[i] = bill + bill * percentage;
        }
    }
}

john.calcTip();
console.log(john);

*/






















