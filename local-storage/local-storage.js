const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('item')) || [];

function addItem(e) {
    // prevent reloading when submit event occurs
    e.preventDefault();
    // select typed values from input box
    const text = (this.querySelector("[name=item]")).value;

    const item = {
        text,
        done: false
    }

    items.push(item);
    populateList(items, itemList);
    localStorage.setItem('item', JSON.stringify(items));
    this.reset();
}

// needs a list of plates of populate that was stored in items array
// place to put the html (platesList), pass in itemsList
// not reaching outside to reach items and itemList to make function more resilient, allow for us to pass any items array and any destination html element
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}"> ${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e){
    if (!e.target.matches('input')) return; // skip unless if it's an input
    const el = e.target; // element
    const index = el.dataset.index; // corresponding index in array
    items[index].done = !items[index].done;
    localStorage.setItem('item', JSON.stringify(items));
    populateList(items, itemList);

}

addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleDone);
populateList(items, itemList);