let list = document.getElementById('toDoList');
let inputField = document.getElementById('inputField');
const button = document.getElementById('button');
const things = document.getElementById('things');


//create list item, add new list item on submit and clear input

appendToList = (e) => { 
    let newListItem = document.createElement('li');
    let input = inputField.value;
    let text = document.createTextNode(input);

    if (input.length !=0) {
        console.log("item added to the list")
        newListItem.appendChild(text);
        newListItem.setAttribute("onclick", "remove");
        list.appendChild(newListItem);
        document.getElementById('inputField').value ='';
        console.log(e + newListItem + "was added to the list");
    }
}

button.addEventListener("click" , appendToList);

//onclick remove

remove = (e) => {
    const element = e.target;
    element.remove();
}

list.addEventListener("click", remove);

//change word
changeWord = () => {
    if (things.innerHTML !=="Things") {
        things.innerHTML="Things"
    } else if (things.innerHTML = "Things"){
        if (confirm("Click 'OK' if you are over 16")) {
            things.innerHTML="✨Shit✨"}
    }
}

things.addEventListener("click", changeWord);