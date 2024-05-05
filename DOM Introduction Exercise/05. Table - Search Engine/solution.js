function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchInputReference=document.getElementById('searchField');
   const tableRows=document.querySelectorAll('tbody tr')
   function onClick() {
      let searchInput=searchInputReference.value;
      for (let currentRow of tableRows) {
         let tableData=currentRow.querySelectorAll('td');
         for (let currentData of tableData) {
            if (currentData.textContent.includes(searchInput)) {
               currentRow.classList.add('select');
            }
         }
      }
      searchInputReference.value='';
   }
}