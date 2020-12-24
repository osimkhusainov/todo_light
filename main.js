// const input = document.querySelector("input");
// const btn = document.querySelector(".add-btn");
// const blockList = document.querySelector(".block__list");
// let todo;
// function todoLocal(){
//   todo = blockList.innerHTML;
//   localStorage.setItem('todos', JSON.stringify(todo));
// }
// function createElenet(e) {
//   e.preventDefault();
//   const li = document.createElement("li");
//   const deleteBtn = document.createElement("button");
//   deleteBtn.className = "block__button-delete";
//   deleteBtn.textContent = "delete";
//   li.classList.add("block__li");
//   li.textContent = input.value;
//   li.appendChild(deleteBtn);
//   blockList.appendChild(li);
//   deleteBtn.addEventListener("click", (e) => {
//     blockList.removeChild(li);
//     // todoLocal()
//   });
//   li.addEventListener('click', () => {
//     li.classList.toggle('task_done')
//     // todoLocal()
//   });
// }

// function addTask(e) {
//   if (input.value === "") {
//     return alert("введите сообщение");
//   } else {
//     createElenet(e);
//     input.value = "";
//     todoLocal()
//   }
// }
// if(localStorage.getItem('todos')){
//   blockList.innerHTML = JSON.parse(localStorage.getItem('todos'))
// }

// btn.addEventListener("click", addTask);

const input = document.querySelector("input");
const btn = document.querySelector(".add-btn");
const ul = document.querySelector(".block__list");
const form = document.querySelector("#form");
let todo;
function todoLocal() {
  todo = ul.innerHTML;
  localStorage.setItem("todos", JSON.stringify(todo));
}
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("task_done");
  } else if (e.target.className === "block__button-delete") {
    const div = e.target.parentNode;
    div.remove();
  }
  todoLocal();
});
function createTask() {
  const li = document.createElement("li");
  li.classList.add("block__li");
  li.textContent = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "block__button-delete";
  deleteBtn.textContent = "delete";
  li.appendChild(deleteBtn);
  // ul.appendChild(li);
  ul.insertAdjacentElement("afterbegin", li);
}
function addTask(e) {
  e.preventDefault();
  if (input.value === "") {
    alert("error");
    return;
  }
  createTask();
  input.value = "";
  todoLocal();
}
// input.addEventListener('submit', addTask)
if (localStorage.getItem("todos")) {
  ul.innerHTML = JSON.parse(localStorage.getItem("todos"));
}
btn.addEventListener("click", addTask);
form.addEventListener("submit", addTask);
