function toggle() {
    let textRef = document.getElementById('extra');
    let btn = document.getElementsByClassName('button')[0];
    if (btn.textContent == 'More') {
        btn.textContent = 'Less';
        textRef.style.display = 'block';
    } else if (btn.textContent=='Less'){
        btn.textContent='More';
        textRef.style.display='none';
    }
}