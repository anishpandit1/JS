//Example 1:
function fetchData(callback){
    setTimeout(function(){
        const data= "This is some data";
        callback(data);
    }, 1000);//simulate 100 ms
}

function processFetchedData(data){
    console.log("Data Recieved:"+data);
}

fetchData(processFetchedData);

//Example 2
function fetchDataFromAPI(cb){
    setTimeout(function(){
        const data = {message: "Hello World"};
        cb(data, null);
    }, 1000);
}

function processFetchedData1(data, error){
    if(error){
        console.error("Error:",error)
    }
    else{
        console.log("Data Received:",data.message);
    }
}

fetchDataFromAPI(processFetchedData1);