// Funktion der opretter opgave i et tomt array.
let toDo = [];
const submit = document.querySelector("button");
const input = document.querySelector("input");
const randomNum = Math.floor(Math.random() * 100) + 1;

submit.addEventListener("click", () => {
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
  // create clone

  const clone = document.querySelector("template#toDos").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=toDo]").textContent = `Description: ${string.desc}`;
  clone.querySelector(".toDoObject").setAttribute("data-field", string.id);
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
