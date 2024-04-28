function solve() {
   const productAddButtonsReferenceArray=Array.from(document.querySelectorAll('button.add-product'));
   const textAreaReference=document.querySelector("textarea");
   const checkoutButtonReference=document.getElementsByClassName('checkout');
   let productsList=new Set();
   let totalPrice=0;
   productAddButtonsReferenceArray.forEach(button => button.addEventListener('click',onClickAdd));
   checkoutButtonReference[0].addEventListener('click',onCheckout);
   function onClickAdd (e) {
      let productDiv=e.target.parentElement.parentElement; // div product
      let productName=productDiv.children[1].children[0].textContent;
      let price=Number(productDiv.children[productDiv.children.length-1].textContent);
      productsList.add(productName);
      totalPrice+=price;
      textAreaReference.textContent+=`Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
   }
   function onCheckout(e) {
      textAreaReference.textContent+=`You bought ${[...productsList].join(`, `)} for ${totalPrice.toFixed(2)}.`
      productAddButtonsReferenceArray.forEach(button => button.disabled=true);
      checkoutButtonReference[0].disabled=true;
   }
}