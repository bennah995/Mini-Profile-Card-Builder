// a button to trigger displain everything once the user clicks it after inputing everything
let btnUpdate = document.getElementById("updateBtn");
btnUpdate.addEventListener(`click`, () => {

  // name
  // input field selecting
  let nameField = document.getElementById("nameInput");
  //  getting that input value from the input
  const nameValue = nameField.value;
  // pushing the value to the name card
  let nameCard = document.getElementById("cardName");
  document.getElementById("cardName").textContent = `Name: ${nameValue}`;

  // favorite tech
  let techField = document.getElementById("techInput");
  const techValue = techField.value;

  let techCard = document.getElementById("cardTech");
  document.getElementById("cardTech").textContent = `Favorite Tech: ${techValue}`;


  // goal
  let goalField = document.getElementById("goalInput");
  const goalValue = document.getElementById("goalInput").value;

  let goalCard = document.getElementById("cardGoal");
  document.getElementById("cardGoal").textContent =  `Goal: ${goalValue}`;
})


// button selection
let btnTheme = document.getElementById("themeBtn");
let isDarkmode = false;

btnTheme.addEventListener(`click`, () => {

  const body = document.body;
  let card = document.getElementById("card");

  if(isDarkmode){
    // dark mode
    body.style.backgroundColor = "#333333";
    body.style.color = "#ffffff";

    card.style.border = "1px, solid, red";
    card.style.borderRadius = "20px";
    card.style.padding = "20px";
    card.style.backgroundColor = "purple";

    isDarkmode = false;
  } else {
    // light mode
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";

    card.style.border = "1px, solid, blue";
    card.style.borderRadius = "20px";
    card.style.padding = "20px";
    card.style.margin = "0 auto";
    card.style.backgroundColor = "pink";

    isDarkmode = true;
  }
  // alert("Button clicked");
})


let btnReset = document.getElementById("resetBtn");

btnReset.addEventListener(`click`, () => {
  // resetting input fields
  document.getElementById("nameInput").value = "";
  document.getElementById("techInput").value = "";
  document.getElementById("goalInput").value = "";

  // resetting card
  document.getElementById("cardName").textContent = "Your Name:";
  document.getElementById("cardTech").textContent = "Favorite Tech: -";
  document.getElementById("cardGoal").textContent = "Goal: -";
})