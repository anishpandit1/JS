const wordlist = ["amplification", "metaphor", "rubik", "random", "bowling", "football", "cricket",
"worldcup", "wicket", "goal", "runs", "spinner", "cyberscurity", "mastercard", "javascript"];


setInterval(dropWords, 1000);

function dropWords(){
    let position = 30;
    let randIndex = Math.floor(Math.random()*(wordlist.length-1));
   let span = createSpan(wordlist[randIndex]);
   document.body.appendChild(span);

   let intervalID = setInterval(drop, 50);

    function drop(){
         position = position + 1;
         span.style.top = position + "px";

        if(position >= window.innerHeight -50 ){
            span.remove();
            clearInterval(intervalID);
            alert("game over, your score is : " + score);
            }
    }

}
function createSpan(word){
    let span = document.createElement("span");
    span.style.color = "blue";
    span.style.position = "absolute";
    span.id="word";
    span.innerText = word;

    span.style.left = Math.random() *(window.innerWidth-50);
    return span;
}

let typedWord = "";
let score = 0;

document.onkeydown = function(e){
    if (
        e.key != "Alt" &&
        e.key != "Shift" &&
        e.key != "Ctrl" &&
        e.key != "CapsLk" &&
        e.key != "Tab"    
    ){
        if (e.key == "" || e.key == "Enter"){
            if(document.getElementById(typedWord)!= null){
                document.getElementById(typedWord).remove();
                score++;
            }
        } else if (e.key == "Backspace"){
            typedWord = typedWord.substring(0, typedWord.length-1);
        }
        else typedWord = typedWord + e.key;
        document.getElementById("__score").innerText = score;
        document.getElementById("__typedWord").innerText = typedWord;
    } 
};