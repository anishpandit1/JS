let numbers = [1, 2 ,3];

//forEach(v,i,a)
numbers.forEach(function(value, index, array){
    console.log(value, index);
    console.log(array);

});

//map(v,i,a)
let colors = ["red", "green", "blue"];
let transformed = colors.map(function(value){
    return `<p>${value}</p>`;
});
transformed

//filter
let canVote = [23, 18, 19, 16, 20, 22, 35];
let v = canVote.filter(function(value){
    if(value >=18 ) return true;
    else return false;
})
v

let info = [{
    name: "Tim",
    gender: "Male"
    },
    {name: "Ben",
    gender: "Male"
    },
    {
    name: "Jenny",
    gender: "Female"
    }
];
male= info.filter((pi)=>pi.gender == "Male");
male

//reduce
let marks = [66, 90, 81];
let sum = marks.reduce(function(prev, curr){
    console.log(prev);
    console.log(curr);
    return (prev+curr)
},0);
sum;


let data = [10, 20, 100, 111, 122, 40, 30, 2]
//UTF-16 Encoding so we getting below results
console.log(data.sort())
//so
data.sort(function(a, b){
    return a-b; //ascending order
})
data //[ 2, 10, 20, 30, 40, 100, 111, 122 ]

//Objects Aswell
let prodList = [
    {
        name : "Apple 11 pro",
        price: 999.99
    },
    {
        name : "Apple 12 pro",
        price: 1299.99
    },
    {
        name : "Samsung S23",
        price: 1119.99
    },
    {
        name : "Apple 11 pro Max",
        price: 1099.99
    },
    {
        name : "Google pixel pro",
        price: 899.99
    },

];
prodList.sort((a, b)=>{
    return a.price - b.price;
});
prodList