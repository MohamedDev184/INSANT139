const title = document.getElementById("title");
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
document.querySelectorAll(".colors button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    title.style.color = btn.dataset.color;
  });
});


function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);

  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});
