const container = document.querySelector('.container')
const addTodo = document.querySelector('#add-todo');
const addBtn = document.querySelector('#add-btn');
const resetBtn = document.querySelector('#reset-btn');
const errorMsg = document.querySelector('.error-msg');
const todoList = document.querySelector('.todo-list');

const addTodoItem = () => {
    // Add each todo
    if (addTodo.value === '') {
        errorMsg.innerHTML = `It's empty! Please add something.`;
    } else {
        todoList.innerHTML +=
            `<li class="todo-item"><span class="todo">${addTodo.value}</span><button class="done-btn">Done</button><button class="del-btn">X</button></li>`;
        addTodo.value = '';
        errorMsg.textContent = '';

        // Delete each todo
        const delBtns = document.querySelectorAll('.del-btn');
        delBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                let currentItem = e.target;
                currentItem.parentElement.remove();
            });
        });

        // Done each todo
        const doneBtns = document.querySelectorAll('.done-btn');
        doneBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let currentItem = e.target;
                currentItem.parentElement.style.textDecoration = 'line-through';
                currentItem.parentElement.style.color = 'green';
            });
        });
    }
};

addBtn.addEventListener('click', () => {
    addTodoItem();
});

addTodo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodoItem();
    }
});

resetBtn.addEventListener('click', () => {
    while (todoList.hasChildNodes()) {
        todoList.removeChild(todoList.lastChild);
    }
});