function addItem() {
    const textValue=document.getElementById('newItemText');
    const keyValue=document.getElementById('newItemValue');
    const selectMenuReference=document.getElementById('menu');
    let option=document.createElement("option");
    option.value=keyValue.value;
    option.textContent=textValue.value;
    selectMenuReference.appendChild(option);
    textValue.value='';
    keyValue.value='';
}