/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

//He is a boy
console.log("Jonas");
console.log(23);


let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let $function = 27;

let jonas_maltida = "JM";
let PI = 3.1415;


let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

Let job1 = "programmer";
let job2 = 'programmer';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof "Jonas");
 console.log(typeof 23);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);

var job = 'programmer';
job = 'teacher';

// lastName = 'Schmedtman';
// console.log(lastName);


let age = 30;
age = 31;

const birthYear = 1998;
// birthYear = 1997;

// const job;

//Math Operators
const now = 2023;
const ageIyebiye = now - 1998;
const ageAlabiPrecious = now - 2010;
console.log(ageIyebiye, ageAlabiPrecious);

console.log(ageIyebiye * 2, ageIyebiye / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;


const firstName = "Iyebiye"
const lastName = 'Faleye'
console.log(firstName + " " + lastName);


// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10. x should now = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//comparison operators
console.log(ageIyebiye > ageAlabiPrecious); // <, >, >=, <=
console.log(ageAlabiPrecious >= 18);

const isFullAge = ageAlabiPrecious >= 18;

console.log(now - 1998 > now - 2010);


const now = 2023;
const ageIyebiye = now - 1998;
const ageAlabiPrecious = now - 2001;

console.log(ageIyebiye, ageAlabiPrecious);

console.log(now - 1998 > now - 2010);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageAlabiPrecious + ageIyebiye) / 2
console.log(ageAlabiPrecious, ageIyebiye, averageAge)

// Coding Challenge #1
// BMI = mass / height **2 = mass/ (height * height) // (mass in kg and height in meter)

const markWeight = 78;
const markHeight = 1.69;
console.log(markWeight, markHeight);

const johnWeight = 92;
const johnHeight = 1.95;
console.log(johnWeight, johnHeight);


const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

const johnBMI2 = johnWeight / johnHeight ** 2;
console.log(johnBMI2);

const markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);

const markBMI2 = markWeight / markHeight ** 2;
console.log(markBMI2);

const MarkHigherBMI = markBMI > johnBMI;
console.log(MarkHigherBMI, markBMI2 > johnBMI, markBMI >= markBMI2);


//STRINGS AND TEMPLATE LITERALS
const firstName = 'Iyebiye';
const job = "teacher"
const birthYear = 1998;
const year = 2023;

const Iyebiye = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";
console.log(Iyebiye);


const iyebiyeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(iyebiyeNew);

console.log(`just a regular string...`);

console.log('string with \n\
multiple\n\
lines')

console.log(`string with
multiple
lines`)


//IF ELSE CONTROL STRUCTURE
const age = 15;

if (age >= 18) {
    console.log('Sarah can start a driving license 🚙')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another
     ${yearsLeft} years :) `);
}

const birthYear = 2015;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Coding Challenge #1
// BMI = mass / height **2 = mass/ (height * height) // (mass in kg and height in meter)


const markWeight = 78;
const markHeight = 1.69;
console.log(markWeight, markHeight);

const johnWeight = 92;
const johnHeight = 1.95;
console.log(johnWeight, johnHeight);


const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

const johnBMI2 = johnWeight / johnHeight ** 2;
console.log(johnBMI2);

const markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);

const markBMI2 = markWeight / markHeight ** 2;
console.log(markBMI2);

const MarkHigherBMI = markBMI > johnBMI;
console.log(MarkHigherBMI, markBMI2 > johnBMI, markBMI >= markBMI2);

console.log(johnBMI, markBMI)


if (johnBMI > markBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) `)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Marks's BMI (${markBMI})! `)
};

//TYPE CONVERSION
const inputYear = "1998";
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Iyebiye'));
console.log(typeof NaN);

console.log(String(23), 23);

//TYPE COERCION :
console.log(`I am` + 23 + `Years old`);
console.log(`I am` + '23' + `Years old`);

console.log(`23` + `10` + 3);
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);


// 5 Falsy Values; 0, ' ', undefined, niull, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Iyebiye"));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('you should get a job!')
}

let height;
if (height) {
    console.log(`YAY! Height is defined`)
} else {
    console, log(`Height is Underfinedf`)
}


const age = '18';
if (age === 18) console.log(`you just became an adult :D (strict)`);

if (age == 18) console.log(`you just became an adult :D (loose)`);

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);

if (favourite === 23) { // 23 === 23
    console.log('cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log("7 is also a cool number!")
} else if (favourite === 9) {
    console.log('9 is also a cool number!')
}
else {
    console.log("Number is not 23 or 9 or7")
}


const hasDriversLicense = true; //A 
const hasGoodVision = true; // B 

console.log(hasDriversLicense && hasGoodVision); // && And Operator 
console.log(hasDriversLicense || hasGoodVision); // || or operator  
console.log(!hasDriversLicense);   // ! - Not Operator

const shouldDrive = hasDriversLicense && hasGoodVision;


const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired)


// if (shouldDrive) {
//     console.log('sarah is able to drive');
// } else {
//     console.log('someone else should drive...');
// };


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('sarah is able to drive!');
} else {
    console.log('someone else should drive...')
}


//////////////////////////////////////////////
// Coding Challenge #3

const averageScoreDolphins = (96 + 108 + 89) / 3;
console.log(averageScoreDolphins);

const averageScoreKoalas = (88 + 91 + 110) / 3;
console.log(averageScoreKoalas);


if (averageScoreKoalas >= 100 && averageScoreKoalas > averageScoreDolphins) {
    console.log(`congratulations Koalas on winning the Competition!`)
} else if (averageScoreDolphins >= 100 && averageScoreDolphins > averageScoreKoalas) {
    console.log(`congratulations Dolphins on winning the Competition!`)
} else if (averageScoreKoalas >= 100 && averageScoreKoalas === averageScoreDolphins) {
    console.log(`This match is a draw!`);
} else {
    console.log('No one wins the comepetition!');
}

 if (day === "Monday")
    console.log("plan course structure, Go to coding meetup ")
else if (day === 'Tuesday') {
    console.log('Prepare theory videos')
} else if (day === "Wednesday" || "Thursday") {
    console.log('write code examples')
} else if (day === "Friday") {
    console.log("Record Videos")
} else if (day === "Saturday" || "Sunday") {
    console.log('enjoy the weekend')
} else {
    console.log('Not a valid day!');
}

const day = `monday`;

switch (day) {
    case `monday`: // day === 'Monday' then execute the console below
        console.log(`plan course structure`);
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples')
    case 'friday':
        console.log('Record Videos')
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend')
        break;
    default:
        console.log('Not a valid day!');
}



const language = "Chinese || Mandarin";
switch (language) {
    case "Chinese || Mandarin":
        console.log("Most number of Native Speakers");
        break;
    case "Spanish":
        console.log('2nd place in number of native speakers')
        break;
    case "English":
        console.log('3rd Place')
        break;
    case "Hindi":
        console.log("Number 4")
        break;
    case "Arabic":
        console.log("5th most spoke Language")
        break;
    case "Other languages":
        console.log('Great languages  too :D')
    default:
        console.log('Not a language')
}


const age = 13;
// age >= 18 ? console.log('I like to drink wine 🍷') :
//     console.log("I like to drink water 🚰");

const drink = age >= 18 ? 'wine 🍷' : 'water 🚰';

console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = "wine 🍷";
} else {
    drink2 = 'water 🚰';
}
console.log(drink2);

console.log(`I like to drink ${age => 18 ? 'wine 🍷' : 'water 💧'}`);


//////////////////////////////////////////////////
// coding challenge #4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} , and the total value ${bill + tip}`);
*/
