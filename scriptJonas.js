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
});

console.log(toDo);

function displayList(assignments = toDo) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
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
