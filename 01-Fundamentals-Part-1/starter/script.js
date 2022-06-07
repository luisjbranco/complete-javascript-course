/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let country = "Portugal";
let continent = "Europe";
let population = "11M";

console.log(country, continent, population);


let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// Re assign the variable
javascriptIsFun = "YES!";
console.log(javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; const is immutable


// Math Operators
const now = 2022;
const ageJonas = now - 1991;
const ageLuis = now - 1996;
console.log("Jonas age:", ageJonas, "Luis age:", ageLuis);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


// Comparison operators

// >, <, >=, <=

console.log(ageJonas > ageLuis);


// Coding Challenge #1

// Test Data 1

console.log("Test Data 1");

let markMass = 78
let markHeight = 1.69

let johnMass = 92
let johnHeight = 1.95

let markBmi = markMass / (markHeight ** 2);
console.log(markBmi);

let johnBmi = johnMass / (johnHeight ** 2);
console.log(johnBmi);

let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

// Test Data 2
console.log("Test Data 2");

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBmi = markMass / (markHeight ** 2);
console.log(markBmi);

johnBmi = johnMass / (johnHeight ** 2);
console.log(johnBmi);

markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2022;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " " + job + "!";
console.log(jonas);

// Template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// Multiple line strings
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license.")
}

const age2 = 15;

if (age2 >= 18) {
    console.log("Sarah can start driving license.")
} else {
    const yearsLeft = 18 - age2;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`)
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Coding Challenge 2

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);

// if (bmiMark > bmiJohn) {
//     console.log("Mark's BMI is higher than John's!")
// } else {
//     console.log("John's BMI is higher than Marks's!")
// }

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
} else {
    console.log(`John's BMI ${bmiJohn} is higher than Marks's ${bmiMark}!`)
}


// Type conversion 

const inputYear = "1991";

// console.log(inputYear + 18); outputs a string 199118
console.log(Number(inputYear) + 18);

console.log(String(23));

// Type coersion

console.log("I am " + 23 + " years old."); // automatic type matching (coersion)
console.log("23" + "10" + 3);


// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true
console.log(Boolean({})); //true
console.log(Boolean(1)); //true

const money = 0;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}


const age = 18;

if (age === 18) console.log("You just became an adult.")

console.log("18" == 18); //true with type coersion (loose)
console.log("18" === 18); //false (strict)

const favourite = prompt("What's your favourite number?");
console.log(favourite); // saves it as a string

if (favourite === 23) {
    console.log("Cool, 23 is an amazing number.")
} else if (favourite === 7) {
    console.log("7 is also cool")
} else {
    console.log("Number is not 23 or 7")
}

if (favourite !== 23) {
    console.log("Why not 23?")
} else {
    console.log("23 is a nice choice")
}


const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah can drive");
// } else {
//     console.log("Sarah cannot drive")
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
    console.log("Sarah should drive")
} else {
    console.log("Someone else should drive")
}


// Coding Challenge 3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win!")
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win!")
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Draw!")
// }

// BOnus 1

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win!")
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win!")
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Draw!")
// };

// Bonus 2

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win!")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win!")
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Draw!")
};


// Switch statement

const day = "wednesday";

switch (day) {
    case "monday":
        console.log("Plan course structure.");
        console.log("Go to coding meetup.")
        break
    case "tuesday":
        console.log("Prepare theory videos.");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples.");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend!");
        break;
    default:
        console.log("Not a valid day.");
}


// ternary conditional operator
const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

// previous approach

let drink2;

if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);


// Coding Challenge 4

const bill = 430;

const tip = bill <= 300 && bill >= 50 ? (bill * 0.15) : (bill * 0.2);

console.log(`The bill was ${bill}, the tips was ${tip}, and the total value ${bill + tip}.`);

*/

