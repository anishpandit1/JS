/* for (let i = 0; i<=3; i++){
    console.log("Cat");
}

let j = 0;
while(j <4){
    console.log("HEllo");
    j++;
}
do {
    console.log("hello");
    j++;
} while(j < 3);
 */
/* const cities = ["kathmandu", "London", "Nepakgunj"];
for(let i = 0; i<cities.length;i++)
    {
    console.log(cities[i])
    }

cities.forEach(function(value, index){
    console.log(value);
}); */

//For of loop
/* const students = ["Ap", "Xy"];
for(let student of students){
    console.log(student);
}

let movie_name = "The Great Gatsby";
for (let chars of movie_name){
    console.log(chars);
} */


const cities = ["kathmandu", "London", "Nepakgunj"];
for(let c in cities){
    c
}
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