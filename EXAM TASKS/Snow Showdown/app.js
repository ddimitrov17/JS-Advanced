window.addEventListener("load", solve);

function solve() {
  const addButtonReference = document.getElementsByClassName('add-btn')[0];
  addButtonReference.addEventListener('click', onAdd);
  const previewUlReference = document.getElementsByClassName('snowman-preview')[0];
  const nameReference = document.getElementById('snowman-name');
  const heightReference = document.getElementById('snowman-height');
  const locationReference = document.getElementById('location');
  const creatorReference = document.getElementById('creator-name');
  const specialAttributeReference = document.getElementById('special-attribute');
  const onNextUlReference = document.getElementsByClassName('snow-list')[0];
  const mainElementReference = document.getElementById('hero');
  const bodyReference = document.getElementsByClassName('body')[0];
  const snowmanImageReference = document.getElementById('back-img');
  function onAdd(e) {
    if (nameReference.value == '' ||
      heightReference.value == '' ||
      locationReference.value == '' ||
      creatorReference.value == '' ||
      specialAttributeReference.value == '') {
      return;
    }
    let previewLi = document.createElement('li');
    previewLi.classList.add('snowman-info');
    let previewArticle = document.createElement('article');
    let nameP = document.createElement('p');
    nameP.textContent = `Name: ${nameReference.value}`;
    previewArticle.appendChild(nameP);
    let heightP = document.createElement('p');
    heightP.textContent = `Height: ${heightReference.value}`;
    previewArticle.appendChild(heightP);
    let locationP = document.createElement('p');
    locationP.textContent = `Location: ${locationReference.value}`;
    previewArticle.appendChild(locationP);
    let creatorP = document.createElement('p');
    creatorP.textContent = `Creator: ${creatorReference.value}`;
    previewArticle.appendChild(creatorP);
    let specialAttributeP = document.createElement('p');
    specialAttributeP.textContent = `Attribute: ${specialAttributeReference.value}`;
    previewArticle.appendChild(specialAttributeP);
    let divContainer = document.createElement('div');
    divContainer.classList.add('btn-container'); 
    let editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit-btn');
    editButton.textContent = 'Edit';
    let nextButton = document.createElement('button');
    nextButton.setAttribute('class', 'next-btn');
    nextButton.textContent = 'Next';

    previewUlReference.appendChild(previewLi);
    previewLi.appendChild(previewArticle);
    previewLi.appendChild(divContainer); 
    divContainer.appendChild(editButton);
    divContainer.appendChild(nextButton);
    let editedName = nameReference.value;
    let editedHeight = heightReference.value;
    let editedLocation = locationReference.value;
    let editedCreator = creatorReference.value;
    let editedAttribute = specialAttributeReference.value;
    nameReference.value = '';
    heightReference.value = '';
    locationReference.value = '';
    creatorReference.value = '';
    specialAttributeReference.value = '';
    addButtonReference.disabled = true;
    editButton.addEventListener('click', onEdit);
    nextButton.addEventListener('click', onNext);
    function onEdit(e) {
      nameReference.value = editedName;
      heightReference.value = editedHeight;
      locationReference.value = editedLocation;
      creatorReference.value = editedCreator;
      specialAttributeReference.value = editedAttribute;
      previewLi.remove();
      addButtonReference.disabled = false;
    }
    function onNext(e) {
      let onNextLi = document.createElement('li');
      onNextLi.classList.add('snowman-content');
      let onNextArticle = previewArticle;
      onNextLi.appendChild(onNextArticle);
      onNextUlReference.appendChild(onNextLi);
      previewLi.remove();
      let sendButton = document.createElement('button');
      sendButton.setAttribute('class', 'send-btn');
      sendButton.textContent = 'Send';
      onNextArticle.appendChild(sendButton); 
      sendButton.addEventListener('click', onSend);
      function onSend(e) {
        mainElementReference.remove();
        let backButton = document.createElement('button');
        backButton.setAttribute('class', 'back-btn');
        backButton.textContent = 'Back';
        snowmanImageReference.removeAttribute("hidden");
        bodyReference.appendChild(backButton);
        backButton.addEventListener('click', onBack);
        function onBack(e) {
          location.reload();
        }
      }
    }
  }
}
