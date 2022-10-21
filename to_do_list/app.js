const inputNewClient = document.querySelector('#new-client');
const newClientDate = document.querySelector('#new-client-date');
const addBtn = document.querySelector('.add-btn');
const removeAllBtn = document.querySelector('.remove-all-btn');
const clientList = document.querySelector('.client-list');

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
    if (inputNewClient.value) {
        const clientName = inputNewClient.value;

        const li = document.createElement('li');
        li.className = 'client';
        li.appendChild(document.createTextNode(clientName));
        const span = document.createElement('span');
        span.className = 'client-date-input';
        span.appendChild(document.createTextNode(newClientDate.value));
        li.appendChild(span);

        clientList.appendChild(li);
        storeClientInLocalStorage(inputNewClient.value);

        console.log(inputNewClient.value);
    }
    inputNewClient.value = '';
    newClientDate.value = '';
    inputNewClient.focus();
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
    while (clientList.firstChild) {
        clientList.firstChild.remove();
    }
};