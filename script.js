let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelector("li");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    let delButton = document.createElement("button");
    let innerText = document.createTextNode("delete");
    delButton.appendChild(innerText);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(delButton);
    ul.appendChild(li);
    input.value="";
    delButton.onclick = delBtn;
}

function delBtn(evt) {
  evt.target.parentNode.remove();
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}



button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

