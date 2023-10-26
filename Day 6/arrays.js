/*let studentsList = ["Tom",  "Harry"];
studentsList[2] = "Dick";
console.log(studentsList)

let studentsList1 = new Array("Tim", "Horton", true, 1);
console.log(studentsList1)
*/
let studentsList = ["Tom",  "Harry"];
studentsList.push("Dick");
studentsList.pop();
studentsList.unshift("Dick");

console.log(studentsList.join(", "));

studentsList1= ["Oracle", "Comptia"];

let newList = studentsList.concat(studentsList1);
newList
console.log(newList.slice(2, 5));
console.log(newList.fill("changing 2 and 3 index", 2, 4));