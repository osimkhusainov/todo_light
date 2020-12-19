const input = document.querySelector("input");
const btn = document.querySelector(".delete-btn");
const blockList = document.querySelector(".block__list");

function createElenet(e) {
  e.preventDefault();
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "block__button-delete";
  deleteBtn.textContent = "delete";
  li.classList.add("block__li");
  li.textContent = input.value;
  li.appendChild(deleteBtn);
  blockList.appendChild(li);
  deleteBtn.addEventListener("click", (e) => {
    blockList.removeChild(li);
  });
}
function addTask(e) {
  if (input.value === "") {
    return alert("введите сообщение");
  } else {
    createElenet(e);
    input.value = "";
  }
}
btn.addEventListener("click", addTask);
