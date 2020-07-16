const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__list');

const createListItem = function (text) {
    const removeButton = createRemoveButton();
    const newListEl = document.createElement('li');
    newListEl.textContent = text;
    newListEl.classList.add('todo__item');
    newListEl.appendChild(removeButton);
    return newListEl;
}

const createRemoveButton = function() {
    const newButtonEl = document.createElement('button');
    newButtonEl.classList.add('todo__remove');
    newButtonEl.textContent = 'x';
    return newButtonEl;
}


function addListItem(e) {
    if (e.keyCode === 13) {
        const newListEl = createListItem(todoInput.value);
        todoList.appendChild(newListEl); // add at the end
        // todoList.insertBefore(newListEl, todoList.childNode[0]) // to insert at beginning, use childNode[0] for event delegation

        todoInput.value = '';
    }
}

function removeItem(e) {
    if (e.target.classList.contains('todo__remove')) {
        const item = e.target.parentNode;
        console.log(item);
        todoList.removeChild(item);
    }
}

function toggleDone(e) {
    if (e.target.classList.contains('todo__item')) {
        e.target.classList.toggle('done');
    }
}

function runTodo() {
    todoInput.addEventListener('keypress', addListItem);
    todoList.addEventListener('click', removeItem);
    todoList.addEventListener('click', toggleDone);
}

runTodo();