let student = {
    name: "Thomas",
    age : 23,
    address: {
       city: "Ktm, NP",
       Phone: 98989898
    },
};

const{address:{city:City},}= student;
console.log(City);


let a ={...student};
a
