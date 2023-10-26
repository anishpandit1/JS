//Recurision function: i) stoping condition
// ii) Call self and solve

function fact(n){
    if (n==0){
        return 1;
    }
    else{
        return n*fact(n-1)
    }
}
console.log(fact(5));
