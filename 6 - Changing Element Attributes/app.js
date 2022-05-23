const image = document.getElementById("image");
console.log(image);
const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  image.src = input.value;
});
