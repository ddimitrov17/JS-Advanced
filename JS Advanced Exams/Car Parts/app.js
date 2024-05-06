window.addEventListener('load', solve);

function solve() {
        const nextButtonReference = document.getElementById('next-btn');
        const imageElementReference = document.getElementById('complete-img');
        const completeTextParagraphReference = document.getElementById('complete-text');
        const onNextUlListReference = Array.from(document.getElementsByClassName('info-list'))[0];
        const carModelForm = document.getElementById('car-model');
        const carYearForm = document.getElementById('car-year');
        const partNameForm = document.getElementById('part-name');
        const partNumberForm = document.getElementById('part-number');
        const conditionForm = document.getElementById('condition');
        const confirmUlReference=(document.getElementsByClassName('confirm-list'))[0];
        nextButtonReference.addEventListener('click', onNext);
        function onNext(e) {
                if (carModelForm.value == '' ||
                        carYearForm.value == '' ||
                        partNameForm.value == '' ||
                        partNumberForm.value == '' ||
                        conditionForm.value == '') {
                        return;
                }
                let year = carYearForm.value;
                if (year < 1980 || year > 2023) {
                        return;
                }
                imageElementReference.style.visibility = 'hidden';
                completeTextParagraphReference.textContent = '';
                let onNextLi = document.createElement('li');
                onNextLi.classList.add('part-content');
                let onNextArticle = document.createElement('article');
                let carModelP = document.createElement('p');
                onNextArticle.appendChild(carModelP);
                carModelP.textContent = `Car Model: ${carModelForm.value}`;
                let carYearP = document.createElement('p');
                onNextArticle.appendChild(carYearP);
                carYearP.textContent = `Car Year: ${carYearForm.value}`;
                let partNameP = document.createElement('p');
                onNextArticle.appendChild(partNameP);
                partNameP.textContent = `Part Name: ${partNameForm.value}`;
                let partNumberP = document.createElement('p');
                onNextArticle.appendChild(partNumberP);
                partNumberP.textContent = `Part Number: ${partNumberForm.value}`;
                let conditionP = document.createElement('p');
                onNextArticle.appendChild(conditionP);
                conditionP.textContent = `Condition: ${conditionForm.value}`;
                let editBtn = document.createElement('button');
                editBtn.setAttribute('class', 'edit-btn');
                editBtn.textContent = 'Edit';
                let continueBtn = document.createElement('button');
                continueBtn.setAttribute('class', 'continue-btn');
                continueBtn.textContent = 'Continue';

                onNextUlListReference.appendChild(onNextLi);
                onNextLi.appendChild(onNextArticle);
                onNextLi.appendChild(editBtn);
                onNextLi.appendChild(continueBtn);
                let editedCarModelForm = carModelForm.value;
                let editedCarYearForm = carYearForm.value;
                let editedPartNameForm = partNameForm.value;
                let editedPartNumberForm = partNumberForm.value;
                let editedConditionForm = conditionForm.value;
                carModelForm.value = '';
                carYearForm.value = '';
                partNameForm.value = '';
                partNumberForm.value = '';
                conditionForm.value = '';
                nextButtonReference.disabled = true;
                editBtn.addEventListener('click', onEdit);
                continueBtn.addEventListener('click', onContinue);
                function onEdit(e) {
                        carModelForm.value = editedCarModelForm;
                        carYearForm.value = editedCarYearForm;
                        partNameForm.value = editedPartNameForm;
                        partNumberForm.value = editedPartNumberForm;
                        conditionForm.value = editedConditionForm;
                        onNextLi.remove();
                        nextButtonReference.disabled=false;
                }
                function onContinue(e) {
                        let confirmLi=document.createElement('li');
                        confirmLi.classList.add('part-content');
                        confirmUlReference.appendChild(confirmLi);
                        let confirmArticle=onNextArticle;
                        confirmLi.appendChild(confirmArticle);
                        onNextLi.remove();
                        let confirmBtn=document.createElement('button');
                        confirmBtn.setAttribute('class','confirm-btn');
                        confirmBtn.textContent='Confirm';
                        let cancelBtn=document.createElement('button');
                        cancelBtn.setAttribute('class','cancel-btn');
                        cancelBtn.textContent='Cancel';
                        confirmLi.appendChild(confirmBtn);
                        confirmLi.appendChild(cancelBtn);
                        confirmBtn.addEventListener('click',onConfirm);
                        cancelBtn.addEventListener('click',onCancel);
                        function onConfirm(e) {
                                nextButtonReference.disabled=false;
                                imageElementReference.style.visibility='visible';
                                completeTextParagraphReference.textContent='Part is Ordered!';
                                confirmLi.remove();
                        }
                        function onCancel(e) {
                                nextButtonReference.disabled=false;
                                confirmLi.remove();
                        }
                }
        }
};




