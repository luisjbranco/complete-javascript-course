'use strict';

/*
// induce an error for strict mode to correct
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true; // wrong var name
if (hasDriversLicense) console.log("I can drive.");

// const interface = "Audio"; contains reserved word
// const private = 534; contains reserved word


// Functions

function logger() {
    console.log("My name is Jonas.");
}

// calling / running / invoking a function
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear; // age
}
const age1 = calcAge1(1996)

// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1996);

console.log(age1, age2);


// Arrow functions

const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1996));

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} can retire in ${retirement} years.`;
}
console.log(yearsUntilRetirement2(1996, "Luis"));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} can retire in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1996, "Luis"));
console.log(yearsUntilRetirement(1950, "Alex"));


// Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverageScore = calcAverage(85, 54, 41);
const koalasAverageScore = calcAverage(23, 34, 27);

const checkWinner = function (avgScore1, avgScore2) {
    if (avgScore1 >= 2 * avgScore2) {
        console.log(`Dolphins win ${avgScore1} vs ${avgScore2}.`);
    } else if (avgScore2 >= 2 * avgScore1) {
        console.log(`Koalas win ${avgScore2} vs ${avgScore1}.`);
    } else {
        console.log("Draw!");
    }
}

checkWinner(dolphinsAverageScore, koalasAverageScore);


// Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(y[3]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "Teacher", friends];
console.log(jonas);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

//console.log(calcAge(years));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years.length - 1);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)];

console.log(ages);


// Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements

friends.pop(); // last
console.log(friends);
const popped = friends.pop();
console.log(popped);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven")); // Get index

console.log(friends.includes("Steven")); // Bool for presence

if (friends.includes("Peter")) {
    console.log("You have a friend named Peter");
}


const bills = [125, 555, 44];

const calcTip = function (billTotal) {
    if (billTotal >= 50 && billTotal <= 300) {
        return billTotal * 0.15
    } else {
        return billTotal * 0.2
    }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);


// Objects

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steve"]
};

console.log(jonas);
console.log(jonas.lastName); // dot notation
console.log(jonas["lastName"]); // bracket notation

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // if we have to compute
console.log(jonas["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.");

// console.log(jonas.interestedIn); // error
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job and friends.");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// Jonas has 3 friends and his best friends is called Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);


const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steve"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    // driversLicense: function () {
    //     if (this.hasDriversLicense) {
    //         return "has";
    //     } else {
    //         return "does not have";
    //     }
    // }

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};

// console.log(jonas.calcAge(1996));
// console.log(jonas["calcAge"](1996));

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46 year old teacher, and he has a drivers license."

// console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old teacher, and he ${jonas.driversLicense()} a driver's license.`)

console.log(jonas.getSummary());


// Coding Challenge # 3

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${john.bmi > mark.calcBMI() ? "higher" : "lower"} than ${mark.fullName}'s (${mark.bmi})`);

// Loops

// console.log("Lifting weights repetition 1"); // etc

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {

    console.log(jonasArray[i]);

    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
}

console.log(ages);

// continue and break

console.log("only strings")
for (let i = 0; i < jonasArray.length; i++) {

    if (typeof jonasArray[i] !== "string") continue;
    console.log(jonasArray[i]);
}

console.log("break with number")
for (let i = 0; i < jonasArray.length; i++) {

    if (typeof jonasArray[i] === "number") break;
    console.log(jonasArray[i]);
}


// backwards loop

const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight rep ${rep}`);
    }
}

// while loop

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repitition ${rep}.`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop finished.");
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billTotal) {
    if (billTotal >= 50 && billTotal <= 300) {
        return billTotal * 0.15
    } else {
        return billTotal * 0.2
    }
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(bills, tips, totals);


const calcAverage = function (arr) {
    let sumElements = 0;
    for (let i = 0; i < arr.length; i++) {
        sumElements += arr[i];
    }
    return sumElements / arr.length
}

console.log(calcAverage(totals));
*/