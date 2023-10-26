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

let book1 = new Object({
    name: "Stien på stien",
    author: "Mellisa Jones",
    description: function(){
        return "Book to learn Norwegian Grammer written by "+this.author;
    },
    address: {
        city: "Kathmandu",
        country: "Nepal",
        locale: "Ktm"
    },

});
book1.author="Victor Joe"
console.log(book1.description());
book1.price="200 NOK";
console.log(book1);
console.log(book1.address.city)

console.log(Object.keys(book1));

let empty_obj = {};
Object.assign(empty_obj, book1);
console.log(empty_obj);

let c = Object.assign({},book1);
console.log(c);
 
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
        locale: "NP"
    },
});
book1.name="XYZ";
console.log(book1.name);



