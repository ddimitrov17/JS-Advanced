function deleteByEmail() {
    const input=document.querySelector('[name="email"]');
    const table=document.getElementById('customers');
    const rows=document.querySelectorAll('tbody tr');
    const resultReference=document.getElementById('result');
    let rowsArray=Array.from(rows);
    for (let currentRow of rowsArray) {
        if (currentRow.children[1].textContent==input.value) {
            currentRow.remove();
            resultReference.textContent='Deleted';
        } else {
            resultReference.textContent='Not found.'
        }
    }
}