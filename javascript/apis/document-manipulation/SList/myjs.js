let ul = document.querySelector("ul");
let inpt = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
   let inptVal = inpt.value;
    inpt.value = '';
    let li = document.createElement("li");
    let spn = document.createElement("span");
    let btn2 = document.createElement("button");
    li.appendChild(spn);
li.appendChild(btn2);
spn.textContent = inptVal;
btn2.textContent = 'Delete';
ul.appendChild(li);
btn2.addEventListener("click", () => {
    li.remove();
})
inpt.focus();
})


