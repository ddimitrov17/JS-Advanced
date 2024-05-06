window.addEventListener('load', solution);

function solution() {
  const addButtonReference = document.getElementById('add-btn');
  addButtonReference.addEventListener('click', onAddClick);
  const previewContainerReference = Array.from(document.getElementsByClassName('preview-container'))[0];
  const employeeForm = document.getElementById('employee');
  const descriptionForm = document.getElementById('description');
  const categoryForm = document.getElementById('category');
  const urgencyForm = document.getElementById('urgency');
  const assignedTeamForm = document.getElementById('team');
  const pendingUlReference=document.getElementsByClassName('pending-list')[0];
  const resolvedUlReference=document.getElementsByClassName('resolved-list')[0];
  function onAddClick(e) {
    if (employeeForm.value == '' ||
      descriptionForm.value == '' ||
      categoryForm.value == '' ||
      urgencyForm.value == '' ||
      assignedTeamForm.value == '') {
      return;
    }
    let previewUl = Array.from(document.getElementsByClassName('preview-list'))[0];
    let previewLi = document.createElement('li');
    previewLi.setAttribute('class', 'problem-content')
    previewUl.appendChild(previewLi);
    let previewArticle = document.createElement('article');
    previewLi.appendChild(previewArticle);
    // for (let i = 0; i < 5; i++) {
    //   let currentParagraph = document.createElement('p');
    //   previewArticle.appendChild(currentParagraph);
    // }
    // let arrayOfParagraphs = Array.from(previewArticle.children);
    let employeeP = document.createElement('p');
    employeeP.textContent = `From: ${employeeForm.value}`;
    let categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${categoryForm.value}`;
    let urgencyP = document.createElement('p');
    urgencyP.textContent = `Urgency: ${urgencyForm.value}`;
    let assignedToP = document.createElement('p');
    assignedToP.textContent = `Assigned to: ${assignedTeamForm.value}`;
    let descriptionP = document.createElement('p');
    descriptionP.textContent = `Description: ${descriptionForm.value}`;
    previewArticle.appendChild(employeeP);
    previewArticle.appendChild(categoryP);
    previewArticle.appendChild(urgencyP);
    previewArticle.appendChild(assignedToP);
    previewArticle.appendChild(descriptionP);
    let editBtn = document.createElement("button");
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';
    let continueBtn = document.createElement("button");
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue';
    previewLi.appendChild(editBtn);
    previewLi.appendChild(continueBtn);
    let editedEmployee = employeeForm.value;
    let editedCategory = categoryForm.value;
    let editedUrgency = urgencyForm.value;
    let editedAssignedTo = assignedTeamForm.value;
    let editedDescription = descriptionForm.value;
    employeeForm.value = '';
    descriptionForm.value = '';
    categoryForm.value = '';
    urgencyForm.value = '';
    assignedTeamForm.value = '';
    addButtonReference.disabled = true;
    editBtn.addEventListener('click', onEdit);
    continueBtn.addEventListener('click', onContinue);
    function onEdit(e) {
      previewLi.remove();
      employeeForm.value = editedEmployee;
      categoryForm.value = editedCategory;
      urgencyForm.value = editedUrgency;
      assignedTeamForm.value = editedAssignedTo;
      descriptionForm.value = editedDescription;
      addButtonReference.disabled = false;
    }
    function onContinue(e) {
      let liContinue = document.createElement('li');
      liContinue.classList.add('problem-content');
      let articleContinue = document.createElement('article');
      articleContinue = previewArticle;
      let resolveBtn = document.createElement("button");
      resolveBtn.setAttribute('class', 'resolve-btn');
      resolveBtn.textContent = 'Resolved';
      liContinue.appendChild(articleContinue);
      liContinue.appendChild(resolveBtn);
      pendingUlReference.appendChild(liContinue);
      previewLi.remove();
      addButtonReference.disabled=false;
      resolveBtn.addEventListener('click',onResolve);
      function onResolve(e) {
        let resolvedLi=document.createElement('li');
        resolvedLi.classList.add('problem-content');
        let articleResolved=document.createElement('article');
        articleResolved=articleContinue;
        resolvedLi.appendChild(articleResolved);
        resolvedUlReference.appendChild(resolvedLi);
        liContinue.remove();
        let clearBtn = document.createElement("button");
        clearBtn.setAttribute('class', 'clear-btn');
        clearBtn.textContent = 'clear';
        resolvedLi.appendChild(clearBtn);
        clearBtn.addEventListener('click',onClear);
        function onClear(e) {
          resolvedLi.remove();
        }
      }
    }
  }
}




