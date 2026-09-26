const grams = document.getElementById("grams");
let button = document.getElementById("covertButton");
let result = document.getElementById("result")

button.addEventListener("click", function () {
  const kilograms = Number(grams.value);
  const answer = kilograms / 1000;
  result.textContent = `${answer} kilograms`;
});
