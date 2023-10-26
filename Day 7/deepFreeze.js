"use strict";
const myObj = {
    firstName: "Joe",
    lastName: "Root",
    Address:{
        city: "Liverpool",
        street: "Stokes"
    }
}
Object.freeze(myObj)
//myObj.lastName = "Biden"
myObj.Address.city = "Ktm"
console.log(myObj);


const object1 = {
    age: 20,
    height: 170,
    weight:{
        kg: 70,
        pound: 100
    }
}

function deepFreeze(object){
    const propName = Reflect.ownKeys(object)

    for(const name of propName){
        const value = object[name];
       
        if ((value && typeof value == "object")|| value && typeof value == "function"){
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
}

deepFreeze(object1);