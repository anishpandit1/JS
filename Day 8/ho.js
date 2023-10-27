function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function operation(a, b, fn){
    return fn(a, b);
}

console.log(operation(11, 22, add))

//Simple use case of passing function as a parameter to another function

let numbers = [10, 20, 30];

// const doSquare = function(){
//     let results = [];
//     for (x of numbers){
//         results.push(x*x);
//     }
//     // for(i=0; i <numbers.length; i++){
//     //     results[i]= numbers[i]*numbers[i]
        
//     // }
//     return results;
// };

// const doCube = function(){
//     let results = [];
//     for (x of numbers){
//         results.push(x*x*x);
//     }
//     return results;
// };

// const squareRoot = function(){
//     let results = [];
//     for(x of numbers){
//         results.push(Math.sqrt(x));
//     }
//     return results;
// };

// console.log(doSquare());
// console.log(doCube());
// console.log(squareRoot());

//This can be shorterned as:

const doSquare= (x)=>x*x;
const doCube = (x)=> x*x*x;
const squareRoot = (x)=>Math.sqrt(x);

const calculate = function(logic){
    let results = [];
    for (x of numbers){
        results.push(logic(x));
    }
    return results;

}
console.log(calculate(doCube));
console.log(calculate(squareRoot));
