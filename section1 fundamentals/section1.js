// console.log(40 + 8 + 23 + 10);

// let firstName = "jonas";
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "dani");

// javascriptIsFun = "yeah"
// console.log(typeof javascriptIsFun);

// let year;
// console.log(typeof year);

// year = 1995;
// console.log(typeof year);

// console.log(typeof null);
// const now = 2037;
// const ageDani = now - 1995;
// const ageBrandon = now - 1993;
// console.log(ageDani, ageBrandon);

// const firstName = "Danielle";
// const lastName = "Byrne";
// console.log(firstName + " " + lastName);

// const isFullAge = ageDani >= 18;
// console.log(isFullAge);

//-----------------OPERATOR PRECIDENCE-------------------
const now = 2021;
const ageDani = now - 1995;
const ageBrandon = now - 1993;

// console.log(now - 1993 > now - 1995);

// console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;

// console.log(x,y)
// both are 10 because the - takes precedence over =
// = is executed right to left 

const averageAge = (ageDani + ageBrandon) / 2 
// console.log( ageDani, ageBrandon, averageAge)


//--------------STRINGS ANS TEMPLATE LITERALS------------------

const firstName = "Dani";
const job = "loser";
const birthYear = 1995;
const year = 2021
const dani = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + ' :(';
console.log(dani)

const daniNew = `I'm ${firstName} a ${year-birthYear} years old ${job} :(` 
console.log(daniNew)