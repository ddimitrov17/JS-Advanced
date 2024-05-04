function sumTable() {
    let rows=document.querySelectorAll("td");
    let sum=0;
    for (i=1;i<=rows.length-3;i+=2) {
        sum+=Number(rows[i].textContent);
    }
    let total=document.getElementById("sum");
    total.textContent=Number(sum);
}