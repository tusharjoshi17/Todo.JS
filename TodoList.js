let input = prompt("What would you like to do?");
let todos = ["Collect Chicken Eggs", "Clean Litter Box"];
while (input !== "quit") {
  if (input === "list") {
    console.log("**********");
    for (let i = 0; i < todos.length; i++) {
      console.log(i + ": " + todos[i]);
    }
    console.log("**********");
  } else if (input === "new") {
    let newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
  } else if (input === "delete") {
    let index = parseInt(prompt("Enter index of todo to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log("Deleted Todo " + deleted[0]);
    } else {
      console.log("Unknown index");

      // handle input
    }
  }
  input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");
