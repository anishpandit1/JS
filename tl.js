let firstName= "Anis";
let lastName= "Pandit";

let fullName= firstName + " " + lastName;
let fullName1= `${firstName} ${lastName}`;
console.log(fullName1);

// TypeCasting in JS

let num1= "10";
let num2= "20";

let sum = num1 + num2;
console.log("sum returns 1020", sum);

let sum1= parseInt(num1) + parseInt(num2); // let sum1 = +(num1) + +(num2) is also same.
console.log("sum comes as 30", sum1);

//Nested Template literals:
//Tagged Template literals
let data = Tg`My first name is ${firstName}`;  //Tg = Tagged literals
function Tg(strings, exp){
    console.log(strings);
    console.log(exp);
    return "hey there";

}

console.log("data", data);
