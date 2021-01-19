
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// GOOD LUCK 😀

marksBMI1 = 78 / 1.69**2 
console.log(marksBMI1) 

johnsBMI1 = 92 / 1.95**2
console.log(johnsBMI1)


const massMark = 78;
const heightMark=1.69;
const massJohn = 92;
const heightJohn= 1.95;

const BMIMark = massMark / heightMark **2 
const BMIJohn = massJohn / heightJohn **2

console.log(BMIMark, BMIJohn);

