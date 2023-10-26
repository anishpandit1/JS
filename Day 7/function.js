function add(a, b){
return a + b;
}
add(1, 2); 
//Another way to declare a function
/* let add = new Function("a", "b", "return a+b");
let x = add(1, 4);
console.log(x); */

//Destructuring assignment and Spread Operator
function grades(a, b, [c,...rest]){
    console.log(a,b,c)
    console.log(rest);
}
grades("A", "B", ["C", "D", "E", "F"]);


 let options = {
    title: "My Menu",
    items: ["Chowmein", "Momo", "Rice"]
};
function showMenu({title = " ", width = 10, height = 20, items = []}){
    console.log(`${title} ${width}`);
    console.log(items);
}

showMenu(options); 






// function add(a, b){
//     return a+b;

// }
/* let addFun = function(c,d){
    return c+d;
};
 */

let addFun = (c,e)=>c+e;

console.log(addFun(1,7))

function outer(a){

    function inner(b){
        return a+b;

    }
     return inner;
}
console.log(outer(30)(10))
const adder = outer(30);
console.log(adder(10));

//IIFE: Immediately Invoked Function Expression
(function dotDot(){
    console.log(".......")
})();

let add = (a, b)=>a+b;
add.others = "adding other property to the function"

function Student(firstName){
    this.firstName = firstName;
}

let s1 = new Student("Thomas");
console.log(s1);