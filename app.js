const button = document.getElementById("newBut");
button.addEventListener("click", function () {
  const newDiv = document.createElement("div");
  newDiv.classList.add("newDiv");
  newDiv.innerHTML = "Hello World";
  document.body.appendChild(newDiv);
});
