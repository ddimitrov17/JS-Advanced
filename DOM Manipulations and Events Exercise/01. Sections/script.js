function create(words) {
   const contentReference=document.getElementById('content');
   for (let currentWord of words) {
      const divElement=document.createElement('div');
      contentReference.appendChild(divElement);
      let p=document.createElement('p');
      p.style.display=`none`;
      divElement.appendChild(p);
      p.textContent=currentWord;
      divElement.addEventListener('click',clickHandler);
   }
   function clickHandler(e) {
      let target=e.currentTarget;
      let children=target.children;
      let p=children[0];
      p.style.display='block';
   }
}