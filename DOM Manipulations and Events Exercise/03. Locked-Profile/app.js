function lockedProfile() {
    const showMoreButtons = Array.from(document.getElementsByTagName('button'));
    const divContainerReference=document.getElementById('container');
    let divContainerChildrenArray=Array.from(divContainerReference.children);
    for (let button of showMoreButtons) {
        button.addEventListener('click', showMoreFunc);
    }
    function showMoreFunc(e) {
        let hiddenInfo=e.currentTarget.parentElement.querySelector("div");
        let currentRadioButton=e.target.parentElement.querySelector("input[type='radio']:checked");
        if (currentRadioButton.value == "unlock") {
            if (e.currentTarget.textContent=='Show more') {
                e.currentTarget.textContent='Hide it';
                hiddenInfo.style.display='block';
            } else {
                e.currentTarget.textContent='Show more';
                hiddenInfo.style.display='none';
            }
        }
    }
}