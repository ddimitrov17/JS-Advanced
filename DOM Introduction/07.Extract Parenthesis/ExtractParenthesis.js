function extract(content) {
    let string=document.getElementById(content);
    string=string.textContent;
    let pattern=/\((\w+(\s+\w+)*)\)/g;
    let matches=[];
    let match;
    while ((match=pattern.exec(string))!=null) {
        matches.push(match[1])
    }
    return matches.join(`; `); 
}

`1```