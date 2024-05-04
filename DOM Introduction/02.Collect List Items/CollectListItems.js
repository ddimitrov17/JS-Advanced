function extractText() {
    let listItems=document.querySelectorAll("li");
    let textArea=document.getElementById("result");
    for (let currentList of listItems) {
        textArea.textContent+=currentList.textContent+`\n`;
    }
}