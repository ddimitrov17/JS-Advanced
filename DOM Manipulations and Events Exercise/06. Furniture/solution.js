function solve() {
  let [firstTextAreaReference, secondTextAreaReference] = Array.from(document.getElementsByTagName('textarea'));
  let [generateButtonReference, buyButtonReference] = Array.from(document.getElementsByTagName('button'));
  generateButtonReference.addEventListener('click', generate);
  buyButtonReference.addEventListener('click', buyFunc);
  let boughtFurniture = [];
  let totalPrice = 0;
  let totalDecorationFactor = 0;
  let decFacCounter = 0;
  const tbodyReference = Array.from(document.getElementsByTagName('tbody'))[0];
  function generate(e) {
    let parsedArray = JSON.parse(firstTextAreaReference.value);
    for (let currentFurniture of parsedArray) {
      let currentRow = document.createElement('tr');
      tbodyReference.appendChild(currentRow);
      for (i = 0; i < 5; i++) {
        let tableData = document.createElement('td');
        currentRow.appendChild(tableData);
      }
      let image = document.createElement('img');
      image.src = currentFurniture.img;
      currentRow.children[0].appendChild(image);
      let furnitureName = document.createElement('p');
      furnitureName.textContent = currentFurniture.name;
      currentRow.children[1].appendChild(furnitureName);
      let furniturePrice = document.createElement('p');
      furniturePrice.textContent = currentFurniture.price;
      currentRow.children[2].appendChild(furniturePrice);
      let furnitureDeFac = document.createElement('p');
      furnitureDeFac.textContent = currentFurniture.decFactor;
      currentRow.children[3].appendChild(furnitureDeFac);
      let checkboxInput = document.createElement('input');
      checkboxInput.setAttribute('type', 'checkbox');
      checkboxInput.setAttribute('disabled', '');
      currentRow.children[4].appendChild(checkboxInput);
      const checkboxesReference = Array.from(document.querySelectorAll("input[type='checkbox']"));
      checkboxesReference.forEach(checkbox => {
        checkbox.removeAttribute('disabled');
      });
    }
  }
  function buyFunc(e) {
    const checkedCheckboxes = Array.from(document.querySelectorAll("input[type='checkbox']:checked"));
    for (let currentCheckbox of checkedCheckboxes) {
      let row = currentCheckbox.parentElement.parentElement;
      let name = row.children[1].children[0].textContent;
      let price = Number(row.children[2].children[0].textContent);
      totalPrice += price;
      let decFac = Number(row.children[3].children[0].textContent);
      totalDecorationFactor += decFac;
      decFacCounter++;
      boughtFurniture.push(name);
    }
    secondTextAreaReference.textContent = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    secondTextAreaReference.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    secondTextAreaReference.textContent += `Average decoration factor: ${totalDecorationFactor / decFacCounter}`;
  }
}