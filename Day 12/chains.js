let people = [
    {
        name : "John",
        age : 20,
        gender : "M",
    },
    {
        name : "Annie",
        age : 18,
        gender : "M",
    },
    {
        name : "Johny",
        age : 23,
        gender : "M",
    },
    {
        name : "Snow",
        age : 27,
        gender : "M",
    },

    {
        name : "Elizabeth",
        age : 25,
        gender : "F",
    },

];

result = people.filter((people) => people.age >= 18).sort((a, b) => b.age-a.age)
.map((v) => {document.body.innerHTML += `<li>${v.name} is ${v.age}. So, ${v.gender=="M" ? "He" :"She"} can vote.</li>`} );
console.log(result);