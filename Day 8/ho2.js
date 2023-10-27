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
function filterBy(emps, fn){
    let results= [];
    for(let i = 0; i<emps.length; i++){
        if(emps[i].fn==fn){
            results.push(emps[i])
        }
    }
    return results;
}