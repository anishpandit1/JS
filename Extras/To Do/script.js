
const field = document.getElementById("inputToDo");
field.addEventListener("keypress", function(event){
    // if(event.keyCode== 13){              deprecated huh
    //     addToDo();
    // }
    const keyPressed = event.key;
    if(event.key=="Enter"){
        addToDo();
    }

})
function addToDo(){
    const inputToDo = document.getElementById("inputToDo");
    let inputTextValue = inputToDo.value;

    const myList = document.getElementById("myList");

    if(inputTextValue!=""){
        
        const li = document.createElement("li");
        li.innerHTML = inputTextValue;
        
        myList.appendChild(li)

        let date = new Date();
        const small = document.createElement("small");
        small.innerHTML = "<br>"+date.toLocaleString();
        li.appendChild(small)

        const span = document.createElement("span");
        span.className = "close";
        span.innerHTML="X";

        span.addEventListener("click", function(){
            li.remove();
        })

        li.appendChild(span);

        inputToDo.value="";
    }
    else{
        alert("Enter things to do");
    }

};