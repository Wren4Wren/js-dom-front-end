const input = document.getElementById("input");
const button = document.getElementById("submit");
const removeButton = document.getElementById("remove");

button.addEventListener("click", () => {
  let listItem = document.createElement("li");
  listItem.textContent = input.value;
  console.log(listItem);
  list.appendChild(listItem);
  input.value = "";
});

removeButton.addEventListener("click", () => {
  let lastItem = document.querySelector("li:last-child");
  let list = document.getElementsByTagName("ul")[0];
  list.removeChild(lastItem);
});
