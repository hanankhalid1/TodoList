const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    //Create html (li) element and store it in li (js)
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    //Cross Icon code
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //The value will be disappeared from add row by this line
  inputBox.value = "";
  saveData();
}
// checked code
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
//saved data after refresh
function saveData() {
  localStorage.setItem("dataTask", listContainer.innerHTML);
}
//show data when we again open the file
function showTask() {
  listContainer.innerHTML = localStorage.getItem("dataTask");
}
showTask();
