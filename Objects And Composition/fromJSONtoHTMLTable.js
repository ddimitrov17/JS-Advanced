function fromJSONtoHTMLTable(jsonInput) {
    const objectsInArray = JSON.parse(jsonInput);
    let tableHTML=`<table>`;
    let firstRow = `\n   <tr>`;
    for (let currentKey in objectsInArray[0]) {
        firstRow += `<th>${currentKey}</th>`;
    }
    tableHTML += firstRow + '</tr>';
    for (let currentObject of objectsInArray) {
        let currentRow=`\n   <tr>`;
        for (let currentValue of Object.values(currentObject)) {
            currentRow+=`<td>${currentValue}</td>`;
        }
        currentRow+=`</tr>`;
        tableHTML += currentRow;
    }
    tableHTML+=`\n</table>`;
    console.log(tableHTML);
    // document.getElementById('wrapper').innerHTML = tableHTML;
}

fromJSONtoHTMLTable([{"Name":"Pesho",

"Score":4,

"Grade":8},

{"Name":"Gosho",

"Score":5,

"Grade":8},

{"Name":"Angel",

"Score":5.50,

"Grade":10}])

