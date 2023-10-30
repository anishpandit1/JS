console.log("Example for group and Time console object");
console.group("For Loop Group");
for(i = 0; i<10; i++){
    console.log(i);
}
console.groupEnd();

console.time("Timerrr");
function square(a){
    return a*a
}
console.log(square(100));
console.timeEnd("Timerrr");
