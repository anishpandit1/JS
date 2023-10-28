function Employee(name, age , department){
    this.name = name;
    this.age= age;
    this.department= department;
}

let employees = [
    new Employee("John", 23, "Legal"),
    new Employee("Harry", 30, "Sales"),
    new Employee("Julia", 25, "Sales"),
    new Employee("Marty", 27, "HR"),
    new Employee("Larry", 30, "Admin"),
];

/* function filterByAge(emps, age){
    let results= [];
    for(let i = 0; i<emps.length; i++){
        if(emps[i].age==age){
            results.push(emps[i])
        }
    }
    return results;
}

console.log(filterByAge(employees,23));

function filterByDept(emps, dept){
    let results= [];
    for(let i = 0; i<emps.length; i++){
        if(emps[i].department==dept){
            results.push(emps[i])
        }
    }
    return results;
}
console.log(filterByDept(employees, "Sales")); */
//Same Thing Below:
// function filterByDept(a){
//     if(a==a.department ? true:false);
//     console.log(a.department);
// }

const filterByAge = (e)=>(e.age == 27 ?true:false);
const filterByDept = (e)=>(e.department == "Sales"?true:false);

function filterBy(emps, fn){
    let results= [];
    for(let i = 0; i<emps.length; i++){
        if(fn(emps[i])){
            results.push(emps[i])
        }
    }
    return results;
}
console.log(filterBy(employees, filterByAge));

console.log(filterBy(employees, filterByDept));