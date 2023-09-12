// Binding selectors

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Selecting Elements

const todoInputEl = $(".todo-input");
const todoBtnEl = $(".todo-btn");
const todoFormEl = $(".todo-form");

const todoContainer = $("#todo-container");
const deleteBtnEl = $(".fa-trash-can");

//

const todoArr = [];

String.prototype.toHtmlEntities = function () {
  return this.replace(/./gm, function (s) {
    return s.match(/[a-z0-9\s]+/i) ? s : "&#" + s.charCodeAt(0) + ";";
  });
};

// Functions
// Render Todo List
const renderTodoList = function () {
  let newStr = ``;
  todoArr.forEach((todo, index) => {
    if (todo.editing) {
      newStr += `<div>
      <input type="text" class="todo-input" id="input-${index}" placeholder="Update task" value="${todo.text.toHtmlEntities()}" onfocus="enterToEdit(${index})">
        <button type="submit" class="todo-btn" onclick="finishEdit(${index})">Add task</button>
        </div>`;
      return;
    }
    newStr += `<div class="todo">
    <p onclick="doneTask(${index})" ${
      todo.done ? `class="done"` : ""
    }>${todo.text.toHtmlEntities()}</p>
    <div class="icons">
        <i class="fa-regular fa-pen-to-square" onclick="editTodo(${index})"></i>
        <i class="fa-regular fa-trash-can" onclick="deleteTodo(${index})" ></i>
    </div>
</div>\n`;
  });
  todoContainer.innerHTML = newStr;
};

// Delete Todo
const deleteTodo = function (index) {
  todoArr.splice(index, 1);
  renderTodoList();
};

// Add Todo
const addTodo = function (e) {
  e.preventDefault();
  if (todoInputEl.value !== "") {
    todoArr.push({ text: todoInputEl.value });
    renderTodoList();
    todoInputEl.value = "";
  }
};

todoBtnEl.addEventListener("click", addTodo);

// Edit Todo
const editTodo = function (index) {
  todoArr[index].editing = true;
  renderTodoList();
};

// Finish Edit
const finishEdit = function (index) {
  todoArr[index].editing = false;
  todoArr[index].text = $(`#input-${index}`).value;
  renderTodoList();
};

// Done task
const doneTask = function (index) {
  todoArr[index].done = !todoArr[index].done;
  renderTodoList();
};

// Enter to edit
const enterToEdit = function (index) {
  if ((todoArr[index].editing = true)) {
    $(`#input-${index}`).addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        todoArr[index].text = $(`#input-${index}`).value;
        todoArr[index].editing = false;
        renderTodoList();
      }
    });
  }
};
