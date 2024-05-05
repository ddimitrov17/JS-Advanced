function generateReport() {
    let inputElements = Array.from(document.getElementsByTagName('input'));
    let tableRows = Array.from(document.getElementsByTagName('tr'));
    const textAreaReference=document.getElementById('output');
    const checkedColumns=[];
    const result=[];
    for (i=0;i<tableRows.length;i++) {
        const currentRow=tableRows[i];
        const obj={};
        for (let j=0;j<currentRow.children.length;j++) {
            const element=currentRow.children[j];
            if (i==0) {
                if (element.children[0].checked) {
                    checkedColumns.push(j);
                }
                continue;
            }
            if (checkedColumns.includes(j)) {
                let propertyName=inputElements[j].name;
                obj[propertyName]=element.textContent;
            }
        }
        if (i!==0) {
            result.push(obj);
        }
    }
    textAreaReference.value = JSON.stringify(result);
}