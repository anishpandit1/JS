### Java Script 30 Days Self Training

### Day 1 Introduction
### Day 2 History and Setup

### Day 3	


**i) Ways of Embedding JS code in HTML Document**
	Can be placed inside head or body
	But it is recommended not to put in head as it might take longer to load webpage
	
**ii) Variables(let, const, var)**
	Problems in var:
	Scope is global, Variable created using var can be accessed from anywhere and can be modified anywhere causing accidental unwanted changes or conflicts. Variables can be accessed before it is declared.
	let: can be changed in local scope, where it is defined.  Also can be defined globally if needed. 
	eg. let i=0;
		…
	const: if Constant value needed to declare,
		eg . cont pi= 3.14;


**iii) DataTypes**
	String: can be declared two ways.
	 eg. let a=”10”;
		Or
	   let b = new String(“10”);

	Number: Cannot be greater than 2^53 and precision is lost

	BigInt: Precise than number,
		Let b = BigInt(234379493473947983);
		Or let b = 234379493473947983n;
		BigInt and number datatype cannot be mixed.
	
	Boolean: true or false
	   	eg. let isValidUser= true;

	Undefined: 
		eg. let a;
		Or let a = undefined;   // both are same.
	Null: empy for now, can be used to store later.
		eg. let students = null;

	Symbol: used to create unique identifiers.
		eg. const sym1= Symbol(“sherlock”)
		const sym2=  Symbol(“sherlock”)
				is
		Symbol(“sherlock”)===Symbol(“sherlock”); // false.

	Object:	 can be used for key, value pair,
		let student= {
				name= “Harry”,
				Age = “23”,
				};
		


**iv) Template Literals**
	eg:
	let fullName1= `${firstName} ${lastName}`;

**Tagged Template literals:** 
	make a function, and you take the name of the function that you want to run against the string, and you just put the name right in front of the template.
 eg, let data = Tg`My first name is ${firstName}`;  //Tg = Tagged literals

function Tg(strings, exp){
   	 	console.log(strings);
    		console.log(exp);
}





### Day 4
**Normal vs Asynchronous vs Defer Load**
	Normal: 
HTML Parsing and then fetching, executing and then parsing again in normal.
<script ="scrip.js"></script>
	In async: 
HTML parsing then gets to fetching js files and parsing does not stop then starts executing js and starts parsing again. It is best when loading a large JS file.
<script async="scrip.js"></script>
	In Defer:
	Same like async but fetch all the js files first with continuous parsing and execute the js files at the end. If one js file is dependent on another js file, defer is the best method.
	<script defer="scrip.js"></script>
**Other Operators in JS**
a) Ternary Operator:
	?:
//(condition) ? <true> : <false/>

b) And Operator:
	&&
isUser && isNepali ? console.log(“yes”) : console.log(“haina”);
Or
isUser && isNepal && console.log(“ho”);

c) Or operator:
	||
(isNepali || isUser) && console.log("Maybe");

d) Nullish Operator
??
let newUser= true;
let data = newUser ?? "New User";
console.log("data", data);

e) Comparison operator
=== this == checks only values but === checks for value and its datatype as well.
let a = "10";
let b = 10;
if (a===b){ console.log("same Value");}
else{console.log("not same value");}

### Day 5
-Concept of Object
-CRUD operations in Objects.
-Exploring inbuilt object of JavaScript

**Objects:**
JS Objects are special types of variables that can store both keys and values of the variables and can even contain methods too.
A global interface called Object is available in JS, which enables us to work with objects.

eg.
let book = {
	name: "Practical Malware Analysis",
	author: "Michael Siloski",
	description: function(){
    	return "Book on Malware analysis"
	},
};
console.log(book.name);
console.log(book["author"]);
console.log(book.description());

Nested objects example:
let book1 = new Object({
    name: "Stien på stien",
    author: "Mellisa Jones",
    description: function(){
        return "Book to learn Norwegian Grammer written by "+this.author;
    },
    address: {
        city: "Kathmandu",
        country: "Nepal",
        locale: "NP"
    },


});
book1.author="Peter Griffin"
console.log(book1.description());
book1.price="200 NOK";
console.log(book1);
console.log(book1.address.city)  //Kathmandu
Copying Object to another empty object:
let empty_obj = {};
Object.assign(empty_obj, book1);
console.log(empty_obj);

Another elegant way to do this:
let c = Object.assign({},book1);
console.log(c);

Also,
In JS, objects created with “const” properties can be changed which is a bit weird, but in a sense that the object itself cannot be assigned a new value but its properties can be modified.
For this, we can make use of Object.freeze({});
But the problem with the freeze is that we can freeze/lock the existing values from being modified but nevertheless add new properties to the existing one, which is called shallow freeze.
eg. 
"use strict";
const book1 = Object.freeze({
    name: "Stien på stien",
    author: "Mellisa Jones",
    description: function(){
        return "Book to learn Norwegian Grammer written by "+this.author;
    },
    address: {
        city: "Kathmandu",
        country: "Nepal",
        locale: "Gokarna"
    },
});
book1.name="Pete";
console.log(book1.name);

Cannot assign to read only property 'name' of object '#<Object>' 
  ​​​​​at ​​​​​​Day 5/object.js:54:1​


**BuiltIns:**

Inbuilt object: console, window, document, location, navigator etc.
Inbuilt Wrapper Objects: String, Boolean, Number, Math, Date, JSON etc.

Math: The math namespace object contains static properties and methods for mathematical constants and functions. Math works with the Number type, it does not work with BigInt.

Date: To work with Date and Time in JavaScript.

/* console.log(Math.max(10, 19, 999, 129, 100, 120, 20. -1));
console.log(Math.abs(-999));
console.log(Math.random());


console.log(Math.floor(Math.random()*4));
 */


console.log(Date.now());
console.log(new Date().getDay());
console.log(new Date().toISOString());


### Day 6
Array
Concepts of Array
Inbuilt functions of Array
Destructuring assignment and spread operators.

**Inbuilt Array functions:**

push() (s) : to add new element at the end of array
	studentsList.push("Dick");

pop() (s): to remove the last element from the array
	studentsList.pop();

unshift() (s): to add new element at the beginning of the array
	studentsList.unshift("Dick");
	[ 'Dick', 'Tom', 'Harry' ]
shift() (s) : to remove the first element from the array
		studentsList.shift()

join() (N) : joining the elements of an array by a given string.
		console.log(studentsList.join(", "));
		Dick, Tom, Harry

concat() (N) : to merge/concat two or more arrays.
studentsList1= ["Oracle", "Comptia"];
let newList = studentsList.concat(studentsList1);
[ 'Dick', 'Tom', 'Harry', 'Oracle', 'Comptia' ]		

reverse() (s) : to reverse the array elements.
		console.log(newList.reverse());
		[ 'Comptia', 'Oracle', 'Harry', 'Tom', 'Dick' ]
	Original array is changed.

slice().(N): returns the portion of the array.
		[ 'Dick', 'Tom', 'Harry', 'Oracle', 'Comptia' ]
		console.log(newList.slice(2, 5));
		[ 'Harry', 'Oracle', 'Comptia' ]  // slice according to range provided.

fill().(s): to set or fill the array element with a new one.
	console.log(newList.fill("changing 2 and 3 index", 2, 4));
	[ 'Dick', 'Tom', 'changing 2 and 3 index', 'changing 2 and 3 index',  'Comptia' ]


**Destructuring assignment And Spread Operators(...)**
ES6 features
	Mostly used with objects, arrays, and sometimes with function parameters and with  strings.
Mainly used for assign, shallow copy and merging values between variables.
They make code extremely cleaner and are easier to work with.

let planets= ["Saturn", "Earth", "Mars"];
/* let planet1= planets[0];
let planet2= planets[1];
console.log(planet1, planet2);
and pribt Saturn and Earth OR we can do it another way
*/

let[planet1, planet2, planet3]= planets;
console.log(planet1, planet2, planet3);
	
	let[planet1, planet2, planet3, planet4]= planets;
//There is no planet four and if we print plane4 we get undefined, but we can assign planet4 this way as well.

	let[planet1, planet2, planet3, planet4="Mercury"]= planets;

Spread Operator (…)

let planets= ["Saturn", "Earth", "Mars", "Venus", "Jupiter", "Uranus", "Mercury", "Pluto"];	
let[planet1, planet2, ...Remain]= planets;
console.log(planet1, planet2); //Saturn Earth ​​​​​at ​​​​​​​​planet1
console.log(Remain); // [ 'Mars', 'Venus', 'Jupiter', 'Uranus', 'Mercury', 'Pluto' ] 

 
DS assignment in Objects also
	let student = {
	name: "Thomas",
	age : 23,
	address: "Ktm, NP"
};
const{name:Name}= student;
console.log(Name);  //Thomas

	


Example 2:

let student = {
	name: "Thomas",
	age : 23,
	address: {
   	city: "Ktm, NP",
   	Phone: 98989898
	},
};

const{address:{city:City},}= student;
console.log(City); // Ktm, NP

Example 3
Let's say we have an empty object a,
Let a = {};
We used Object.assign(a, student) to copy student object into a.
But Spread can be used to do the same.
I.e : let a ={...student}; 

### Day 7
Concept of Loops
Concept of Functions + Recursive function in JS
Destructuring Assignment and Spread Operator in Function Params
Ways of creating Functions in JS + Function as object.

**Loops**
For loop, while loop, do-while loop, etc.

i) For loop:
The for statement creates a loop with 3 optional expressions:
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed.
eg: 
	for(let i = 0; i<cities.length;i++)
	{
	console.log(cities[i])
	}

ii) While loop:
The while loop loops through a block of code as long as a specified condition is true.
Syntax
while (condition) {
  // code block to be executed
}

iii) do while loop:
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
Syntax
do {
  // code block to be executed
}
while (condition);


For of loop:
	The for of loop in JS allows you to iterate over iterable objects(arrays, sets, maps, strings etc).
The syntax of the for..of loop is:
		for element of iterable) {
			//body of for…of
		}
Here, iterable-an iterable object(array, set , strings, etc)
	element-items in the iterable.
	eg: let movie_name = "The Great Gatsby";
for (let chars of movie_name){
	console.log(chars);
}
	eg2: const students = ["Ap", "Xy"];
for(let student of students){
	console.log(student);
}

For in loop: 
	A for..in loop is used to iterate over the properties of an object. It allows you to loop through the enumerable properties(including inherited properties from the prototype chain) of an object.
	Syntax:
	for (key in object) {
  // code block to be executed
}
 eg:
	const student = {
	name: "Thomas",
	address: "Oslo",
	contact: 12345
};
for(let s in student){
	console.log(student[s])
}					//Objects’ value is given in the output.










Example 2 With Nested loop:
	const student = {
	name: "Thomas",
	address: {
    	city: "Oslo",
    	zone: 1
	},
	contact: 12345
};
for(let key in student){
	let value = student[key]
    
	if(typeof value==="object"){
    	console.log(value);
	}
	else{
    	console.log(value);
	}
}



**Functions**
A function is a particular set of statements to perform a certain action.
The concept of code reusability comes through the use of function.

	function functionName(parameters) {
  // code to be executed
}
Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
	Simple example:
	function add(a, b){
return a + b;
}
add(1, 2);

Another way to declare a function
let add = new Function("a", "b", "return a+b");
let x = add(1, 4);
console.log(x);

**Destructuring assignment and Spread Operator in functions**
function grades(a, b, [c,...rest]){
	console.log(a,b,c)
	console.log(rest);
}
grades("A", "B", ["C", "D", "E", "F"]);


**Other ways of creating functions**

**Variable assigned function:**
example,
let addFun = function(c,d){
	return c+d;
};

**Arrow function:**
 Function created this way is also called an anonymous function because there wont be the name of the function.
example,

let addFun = (c,e)=>{
	return c+e;

}
console.log(addFun(1,7))
 Or,
Same thing can be written in one line like,

let addFun = (c,e)=>c+e; 


Nested function
example,

function outer(a){

	function inner(b){
    	return a+b;

	}
 	return inner;
}
console.log(outer(30)(10)) 
 	0r same thing with below
const adder = outer(30);
console.log(adder(10));

**IIFE: Immediately Invoked Function Expression**
No need to call function with function name, just enclose the function while declaration within small bracket and appen (); at the end
example,
(function dotDot(){
	console.log(".......")
})();
Output: .......


**Are functions also objects in JS?**
In JS, a function acts like an object i.e they can have properties like object, despite being the function, also they can be created as wrapper objects.
Below two examples should clarify this:
example1,
Properties of objects
let add = (a, b)=>a+b;
add.others = "adding other property to the function"

example2,
object constructor function + initialization as wrapper objects.
function Student(firstName){
	this.firstName = firstName;
}

let s1 = new Student("Thomas");
console.log(s1);

### Day 8

**First Class Function**
 Apart from behaving like an object, another weird part with JS functions is that a function can be passed inside another function.
Programming language that support the three things are known as first class function and they are:
Passing function as argument of another function
Returning function from another function
Assigning function to a variable.

**Higher order function**
A higher order function is a function that takes one or more functions as arguments or returns a function as its results.

**Inbuilt HOFs in JS for Arrays**
forEach:
The forEach() method executes a provided function once for each array element and returns undefined.
map:
The map() method maps/transforms the data into new ones. 
filter:
The filter() method filters the data in the array as per our condition
reduce: 
The reduce() method reduces our given array into a single value.
sort():
The sort() method sorts the data in the array as per our given condition, and returns the sorted array. If -ve a comes before b, if +ve a comes after b.

**Callback functions:**
A function that is passed as an argument to another function and is executed after the completion of the parent function. Callbacks are commonly used in asynchronous programming to handle tasks like responding to user input, making API requests, or reading files. SUch that, it ensures that the program is not blocked or freezed.
Callbacks are not only used to just pass value but also can be used in order to get back the value.
Main usage: Code Isolation, Asynchronous operation handle.


**HOF vs. Callback**
Callbacks are intended to be executed at a later time or under certain conditions whereas HOF are used for internal operations only such as for a variety of tasks, including transforming data, filtering data, composing functions, and more.
Callbacks are a specific use case of Higher Order functions.


## Day 9
**Making Code Reusable**
JS is also a modular programming language, from loops and functions in one level we are making code reusable in one level already but its not done across the different program files of the application. Most of the javascript based framework make use of this concept.
 1) ES6 Modules
	Supported by JS
		i)Named Export
			syntax,
				export {name1, name2};
				and 
				import{name1, name2 as n2};

		ii) Default Export
			syntax,
				export default ProdClass;
				and 
				import ProdClass

 2) Common JS
	Old module system used in Nodejs.


Some old browsers does not support script type = "module" so , "no module" is used.
<script nomodule src="filee.js /></script>

**Console object**
Built-in global object that provides method for interacting with the browser's console or the console of a Javascript environment(eg. Node.js). Commonly used for debugging, logging and displaying information about the execution of the Javascript code. It is not part of the JS language itself but is typically available in most web browsers and JS envs.
The various method of console are:
log(): output message or object to the console.
erro(): output error message to the console.
warn(): output warning message...
info(): output an informational message ...
table(): display tabular data as a table
group(), groupEnd(): groups log messages together.
time(), timeEnd(): Measures the time it takes to execute a block of code.

## Day 10

**Dom Basics**
DOM stands for Document Object Model. It is a tree-structure representation of HTML Documents by the browser engine.
The main feature of JS is the we access, manipulate, and update DOM data as per the requirements.
For this document object comes to rescue. The document object is itself a global object but also one of the property of the window object.
The functions/methods available in the DOM objects helps us to perform various operation with the DOM elements

**Window Object**
The window object is the global object in a browser's JS environment. It reperesents the browser window or tab and provides access to various properties and methods related to browsing, such as, window size, screen, storage, scrollbar info and more.
Also, in browser all global scope of JS code are attached in the window object.
Actually the console and document are object of the window object.

**Document Object**
The document object is a property of the window object, and it represents the web page's DOM. It allows to access and manipulate the content and structure of the HTML document. You can use the document object to select and modify HTML elements, change their attributes or content, create new elements, remove elements from the page.
When an HTML document is loaded into a web browser, it becomes a doucment object.