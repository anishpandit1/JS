// window.alert("hello");
// window.confirm("Are you sure...");

// let inputValue = prompt("Enter your age");
// console.log(inputValue);
document.title = "Welcome";
document.getElementsByTagName("h1")[0].innerHTML;
//OR
const heading1 = document.getElementsByTagName("h1")[1];
heading1.innerHTML = "<h2>Changed Now</h2>"; // Changed to H2 tag but if inner.Text is used then wont change, like:
heading1.innerText="<h2>Changed Now</h2>"

document.getElementById("heading3");

const p = document.querySelector("#main-div > p");
p.title = "You saw this because you hovered here"
p.style = "color:red";
//OR anaother way to do
p.setAttribute("style","font-size:10px");
//To remove the aboce style attribute
//p.removeAttribute("style");
//Create Html tag
const p2 = document.createElement("p");
    //<p>...</p>
p2.innerText = "Contuing paragraph..."
p.append(p2);

const v = document.getElementById("div2");
//console.log(v.dataset);
v.dataset.newData="Something";  //<div id="div2" data-toggle="" data-label="" data-new-data="Something"></div>

const c = document.getElementById("div3");
c.classList.add("divStyle")