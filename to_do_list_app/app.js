const container = document.querySelector('.container')
const addTodo = document.querySelector('#add-todo');
const addBtn = document.querySelector('#add-btn');
const resetBtn = document.querySelector('#reset-btn');
const todoList = document.querySelector('.todo-list')

// Add a new todo
addBtn.addEventListener('click', () => {
    if (addTodo.value === '') {
        container.append(`<p>It's empty! Please add something.</p>`);
    } else {
        todoList.innerHTML +=
            `<li class="todo-item">${addTodo.value}<button>Edit</button><button>X</button></li>`;

        addTodo.value = '';
    }
});
