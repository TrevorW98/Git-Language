let buttons = document.getElementsByClassName("btn");
let changeme = document.getElementById("changeMe");
//run through a loop
// add an event listener

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    alert("You clicked on " + e.target.innerText);
    if (e.target.innerText == "Danger") {
      changeme.innerText = "Danger";
    }
  });
}

function changingtext(textToChange) {
  changeme.innerText = textToChange;

  switch (textToChange) {
    case "Primary":
      changeme.classList.add("blue");
      break;
    case "Primary":
      changeme.classList.add("blue");
      break;
    case "Primary":
      changeme.classList.add("blue");
      break;
    case "Primary":
      changeme.classList.add("blue");
      break;
    case "Primary":
      changeme.classList.add("blue");
      break;
    case "Primary":
      changeme.classList.add("blue");
      break;
  }
}
