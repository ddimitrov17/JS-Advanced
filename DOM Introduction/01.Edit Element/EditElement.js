function editElement(reference,oldstring,newstring) {
    let referenceText=reference.textContent;
    reference.textContent=referenceText.split(oldstring).join(newstring);
}