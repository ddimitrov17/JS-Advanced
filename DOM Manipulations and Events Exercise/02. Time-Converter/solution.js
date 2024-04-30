function attachEventsListeners() {
    const buttons=Array.from(document.querySelectorAll("input[type='button']"));
    for (let currentButton of buttons) {
        currentButton.addEventListener('click',clickHandler);
    }
    function clickHandler(e) {
        let currentInput=e.currentTarget.parentElement.children[1];
        let valueOfCurrentInput=Number(currentInput.value);
        let unit=currentInput.id;
        if (unit=='days') {
            valueFilling(valueOfCurrentInput)
        } else if (unit=='hours') {
            valueFilling(valueOfCurrentInput/24);
        } else if (unit=='minutes') {
            valueFilling(valueOfCurrentInput/24/60);
        } else if (unit=='seconds') {
            valueFilling(valueOfCurrentInput/24/60/60);
        }
    }
    function valueFilling(days) {
        let inputs=document.querySelectorAll("input[type='text']");
        inputs[0].value=days;
        inputs[1].value=days*24;
        inputs[2].value=days*24*60;
        inputs[3].value=days*24*60*60;
    }
}