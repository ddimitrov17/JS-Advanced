function colorize() {
    let rows=document.querySelectorAll("tr");
    for (i=1;i<rows.length;i+=2) {
        rows[i].style.background='teal';
    }
}