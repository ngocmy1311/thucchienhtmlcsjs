var input = document.querySelector("input");
var button = document.querySelector("button");
var form = document.querySelector("form");
var todos = document.querySelector(".todos");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let val = input.value.trim();
  if (val) {
    addTodoElement({ text: val });
    saveTodoList(); 
  }
  input.value = ""; 
});
function addTodoElement(todo) {
  var li = document.createElement("li");
  li.innerHTML = `
            <span>${todo.text}</span>
            <i class="bx bx-trash"></i>
    `;
  if (todo.status === "completed") {
    li.setAttribure("class", "completed");
  }
  li.addEventListener("click", function (e) {
    if (e.target.classList.contains("bx-trash")) {
      li.remove();
    } else {
      li.classList.toggle("completed");
    }
  });
  todos.appendChild(li);
}
function saveTodoList(){
    let todoList = document.querySelectorAll('li');
    let todoStorage = []; 
    todoList.forEach(function(item){
        let text = item.querySelector('span').innerText; 
        let status = item.querySelector('span').getAttribute('class');
        todoStorage.push({
            text, 
            status
        })
    })
    localStorage.setItem('todoList', JSON.stringify(todoStorage));

}
function init(){
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(item){
        addTodoElement(item);
    })
}
init();
