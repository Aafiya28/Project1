let todoInput = document.querySelector('.input');
let addTodoBtn = document.querySelector('.button');
let showTodo = document.querySelector('.todo-container')
let todo;
let todoList = [];

/**Creating function to get the unique id */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(param) {
        let number = Math.random() * 16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    })
}

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    todo = todoInput.value;
    console.log(todo);
    if(todo.length > 0){
        todoList.push({id:uuid(), todo, isCompleted : false})
    }
    renderTodoList(todoList);
    todoInput.value = "";
})

showTodo.addEventListener('click', (e) => {
    let key = e.target.dataset.key;
    let delTodoKey = e.target.dataset.key;
    todoList = todoList.map(todo => todo.id === key ? {...todo, isCompleted: !todo.isCompleted} : todo);
    todoList = todoList.filter(todo => todo.id !== delTodoKey);
    renderTodoList(todoList);
    console.log(todoList);
})

function renderTodoList(todoList){
    console.log(todoList);
    showTodo.innerHTML = todoList.map(({id, todo, isCompleted}) =>`<div class="relative"><input class="t-checkbox t-pointer" id="item-${id}" type="checkbox" data-key=${id} ${isCompleted ? "checked" : ""}> <label for="item-${id}" class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}" data-key=${id}>${todo}</label><button class="absolute right-0 button cursor"><span data-todokey=${id} class=" del-btn material-icons-outlined">
    delete
    </span></button></div>`)
}

renderTodoList(todoList)
