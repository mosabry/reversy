const form = document.getElementById("form");

const user_input = document.getElementById("words");
const reverse_btn = document.getElementById("reverse_btn");
const output = document.getElementById("output");

// Handle form event
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// click event
reverse_btn.addEventListener("click", reverseWord);

// reverse function that will be implemented when button is clicked
function reverseWord() {
  let value = user_input.value;
  let reversed = value.split("").reverse().join("");
  output.innerHTML = reversed;
}

// get year
var date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;
