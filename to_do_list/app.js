const newTaskInput = document.querySelector('#new-task');
const addBtn = document.querySelector('.add-btn');
const removeAllBtn = document.querySelector('.remove-all-btn');
const taskList = document.querySelector('.task-list');

// document.addEventListener('DOMContentLoaded', getClients);

addBtn.addEventListener('click', addNewClient);
removeAllBtn.addEventListener('click', removeAllClients)

// function getClients() {
//     let clients;
//     if (localStorage.getItem('clients') === null) {
//         clients = [];
//     } else {
//         clients = JSON.parse(localStorage.getItem('clients'));
//     }

//     clients.forEach(client => {
//         const li = document.createElement('li');
//         li.className = 'client';
//         li.appendChild(document.createTextNode(client));
//         clientList.appendChild(li);
//     });
// }

function addNewClient() {
    if (newTaskInput.value) {
        const taskItem = newTaskInput.value;

        const li = document.createElement('li');
        li.className = 'task-item';
        li.appendChild(document.createTextNode(taskItem));
        const deleteLink = document.createElement('a');
        deleteLink.className = 'delete-task';
        deleteLink.innerHTML = '<i class="ri-close-line"></i>';
        const doneLink = document.createElement('a');
        doneLink.className = 'done-task';
        doneLink.innerHTML = '<i class="ri-check-line"></i>';
        li.appendChild(deleteLink);
        li.appendChild(doneLink);

        taskList.appendChild(li);
        // storeTaskInLocalStorage(newTaskInput.value);
    }
    newTaskInput.value = '';
    newTaskInput.focus();
};

// function storeClientInLocalStorage(client) {
//     let clients;
//     if (localStorage.getItem('clients') === null) {
//         clients = [];
//     } else {
//         clients = JSON.parse(localStorage.getItem('clients'));
//     }
//     clients.push(client);

//     localStorage.setItem('clients', JSON.stringify(clients));
// }

function removeAllClients() {
    while (taskList.firstChild) {
        taskList.firstChild.remove();
    }
};