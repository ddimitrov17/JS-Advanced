function search() {
   let currentSearch = document.getElementById('searchText').value;
   currentSearch.value = '';
   let cities = document.querySelectorAll('li');
   for (let currentCity of cities) {
         currentCity.style.fontWeight = 'normal';
         currentCity.style.textDecoration = 'none';
      }
      let counter = 0;
      let resultRef = document.getElementById('result');
      for (let currentCity of cities) {
         let current = currentCity.textContent;
         if (current.includes(currentSearch)) {
            currentCity.style.fontWeight = 'bold';
            currentCity.style.textDecoration = 'underline';
            counter++;
         }
      }
      resultRef.textContent = `${counter} matches found`;
}