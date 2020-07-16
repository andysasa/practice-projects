const itemList = document.querySelector('.plates');
const addItems = document.querySelector('.add-items');
const items = JSON.parse(localStorage.getItem('items')) || [];
const checkAll = document.querySelector('.check-all');
const clearAll = document.querySelector('.clear-all');

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], plateList) {
    plateList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList);
}

function handleCheckAll() {
    console.log(items);
    for (const item of items) {
        item.done = true;
    }
    populateList(items, itemList);
}

function handleClearAll() {
    console.log(items);
    for (const item of items) {
        item.done = false;
    }
    populateList(items, itemList);
}


addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleDone);
checkAll.addEventListener('click', handleCheckAll);
clearAll.addEventListener('click', handleClearAll);
populateList(items, itemList);

