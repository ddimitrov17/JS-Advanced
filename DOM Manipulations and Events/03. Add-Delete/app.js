function addItem() {
    let input = document.getElementById('newItemText');
    if (input.value.length == 0) {
        return;
    }
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    const deleteButton=document.createElement('a');
    deleteButton.textContent='[Delete]';
    deleteButton.href='#';
    liElement.appendChild(deleteButton);
    deleteButton.addEventListener('click',deleteFunc);
    const list = document.getElementById('items');
    list.appendChild(liElement);
    input.value = '';
    function deleteFunc(event) {
        const deleteBtn=event.target;
        const liElement=deleteBtn.parentElement;
        liElement.remove();
    }
}