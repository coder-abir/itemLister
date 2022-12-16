const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);

//Filter event
filter.addEventListener('keyup',filterItems);


// add items
function addItem(e){

    e.preventDefault();
    // Get input value 
    const newItem = document.getElementById('item');

    //create new li element
    const li = document.createElement('li');

    //add classname to li
    li.className = 'list-group-item font-monospace display-6 text-capitalize';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem.value));

    //create  new delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-dark btn-sm float-end delete';

    //append text-node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    if(newItem.value.length > 0){
        itemList.appendChild(li);
    }


    newItem.value = "";

}

//remove items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items
function filterItems(e){
    // convert text to lowercase
    const text =  e.target.value.toLowerCase();
    // Get list items
    const items = itemList.getElementsByTagName("li");
    // convert to an array
    Array.from(items).forEach((item) => {
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !== -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}

