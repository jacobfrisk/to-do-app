// Funktion der opretter opgave i et tomt array.
let toDo = [];
const submit = document.querySelector("#submit");
const input = document.querySelector("input");
const randomNum = Math.floor(Math.random() * 5000) + 1;
const doneButton = document.querySelector("#done-button");

submit.addEventListener("click", () => {
  console.log("her er vi");
  const assign = {
    desc: input.value,
    id: Math.floor(Math.random() * 5000) + 1,
  };

  toDo.push(assign);

  // Display only the last item in the array
  //   displayAssignment(toDo[toDo.length - 1]);
  displayList();

  console.log(toDo);
});

function displayList(assigments = toDo) {
  const list = document.querySelector("#to-do-list");
  if (list.children.length > 0) {
    list.innerHTML = "";
  }

  // Build a new list
  assigments.forEach(displayAssignment);
}

function displayAssignment(string) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  // create clone
  const clone = document.querySelector("template#toDos").content.cloneNode(true);

  // set clone data
  const taskElement = clone.querySelector(".task");
  const toDoObjectElement = clone.querySelector(".to-do-object");
  const dateInputElement = clone.querySelector(".date-input");
  const dueDateElement = clone.querySelector(".due-date");

  taskElement.textContent = `Description: ${string.desc}`;
  toDoObjectElement.setAttribute("data-field", string.id);
  dateInputElement.setAttribute("value", formattedDate);
  dueDateElement.textContent = `Due date: ${string.dueDate}`;
  if (string.dueDate === undefined) {
    dueDateElement.textContent = "";
  }
  //   clone.querySelector('[type = "checkbox"]').checked = string.done;
  //   clone.querySelector('[type = "checkbox"]').addEventListener("click", klikCheck);
  //   function klikCheck(evt) {
  //     evt.preventDefault();
  //     console.log("KLIK TJEK");
  //     string.done = !string.done;
  //     displayList();
  //     if (string.done === false) {
  //     } else {
  //       document.querySelector("#done-list").appendChild(clone);
  //     }
  //   }
  // append clone to list

  document.querySelector("#to-do-list").appendChild(clone);

  // Add an event listener for the specific task's date input
  dateInputElement.addEventListener("change", () => {
    let toDoDate = dateInputElement.value;
    string.dueDate = toDoDate;
    // dueDateElement.textContent = `Due date: ${string.dueDate}`;
    dueDateElement.textContent = string.dueDate;
    console.log(string);
    toDo.sort(compareFn);
    displayList();
  });
}

function compareFn(a, b) {
  if (a.dueDate === undefined && b.dueDate === undefined) {
    return 0; // If both dueDates are undefined, no change in order.
  } else if (a.dueDate === undefined) {
    return 1; // Move objects with undefined dueDate to the bottom.
  } else if (b.dueDate === undefined) {
    return -1; // Keep objects with defined dueDate at the top.
  } else if (a.dueDate < b.dueDate) {
    return -1; // Sort by dueDate if both are defined.
  } else {
    return 1;
  }
}

console.log(toDo);
