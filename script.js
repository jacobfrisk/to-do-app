// Funktion der opretter opgave i et tomt array.
let toDo = [];
const submit = document.querySelector("#submit");
const input = document.querySelector("input");
const randomNum = Math.floor(Math.random() * 100) + 1;

submit.addEventListener("click", "keypress", (e) => {
  e.key === "Enter";
  console.log("her er vi");
  const assign = {
    // Strengen der skrives ud er det samme som det input der laves
    desc: input.value,
    // Et tilfældigt ID tilføjes med Math.random
    id: Math.floor(Math.random() * 5000) + 1,
  };

  toDo.push(assign);

  displayList();
});

console.log(toDo);

function displayList(assignments = toDo) {
  const tbody = document.querySelector("#list tbody");

  // Clear the tbody only if there are items to display
  if (tbody.children.length > 0) {
    tbody.innerHTML = "";
  }

  // Build a new list
  assignments.forEach(displayAssignment);
}

function displayAssignment(string) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to the month because it is zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  // create clone

  const clone = document.querySelector("template#toDos").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=toDo]").textContent = `Description: ${string.desc}`;
  clone.querySelector(".toDoObject").setAttribute("data-field", string.id);
  clone.querySelector("[data-field=datePicker]").setAttribute("value", formattedDate);

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

// Opgaven får et random ID med Math.random
// Opgave får tilegnet en streng

// Opgaven tilføjes til en "To-Do" liste

// Opgaven kan få en dato

// Opgave sorteres efter dato

// Opgaven flyttes til en "Vigtig" liste hvis den er vigtig

// Opgave kan flyttes til en "Færdig" liste

// Opgave kan slettes
