const addTodo = document.querySelector('#add-todo');
const addBtn = document.querySelector('#add-btn');
const resetBtn = document.querySelector('#reset-btn');
const todoList = document.querySelector('.todo-list')

// Add a new todo
addBtn.addEventListener('click', () => {
    let newTodo = addTodo.value;
    todoList.innerHTML +=
        `<li class="todo-item">${newTodo}<button>Edit</button><button>X</button></li>`

    newTodo.value = 'hello';
});
