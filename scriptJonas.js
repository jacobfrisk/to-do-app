const toDo = [];
const submit = document.querySelector("button");
const input = document.querySelector("input");

submit.addEventListener("click", () => {
  console.log("her er vi");
  const assign = {
    desc: input.value,
  };

  toDo.push(assign);

  displayList();
  console.log(toDo);
});

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
  clone.querySelector("[data-field=toDo]").textContent = string.desc;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
