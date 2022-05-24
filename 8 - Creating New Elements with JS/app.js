const input = document.getElementById("input");
const button = document.getElementById("submit");
const showHideButton = document.getElementById("showhide-btn");
let list = document.getElementsByTagName('ul')[0];

button.addEventListener('click', () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    console.log(listItem);
    list.appendChild(listItem)
    input.value = "";
})

showHideButton.addEventListener('click', () => {
    let list = document.getElementsByTagName('ul')[0];
    if (list.style.display == "none") {
        list.style.display = "block";
        showHideButton.textContent = 'hide';
    } else {
        list.style.display = "none";
        showHideButton.textContent = "show";
    }
})

