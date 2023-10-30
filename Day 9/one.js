const value = "This Value";

function add(a, b){
    return a+b;
}
let student = {
    name: "Johnny",
    age: 27
};

class ProdClass{
    constructor() {}
    add(){
        console.log("Product Added");
    }
}

//named Export.
export {value, add, student};

//Default Export
export default ProdClass;
