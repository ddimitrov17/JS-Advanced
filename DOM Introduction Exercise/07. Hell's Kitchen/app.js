function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   function onClick() {
      const textAreaReference = document.querySelector('textarea');
      const outputsDiv = document.getElementById('outputs');
      const paragraphs = outputsDiv.querySelectorAll('p');
      const bestRestaurantReference = paragraphs[0];
      const bestRestaurantWorkersReference = paragraphs[1];
      let data = JSON.parse(textAreaReference.value);
      let dataObject = {};
      for (let currentRestaurant of data) {
         let [restaurantName, workers] = currentRestaurant.split(` - `);
         let workersArray = workers.split(`, `)
         if (!dataObject.hasOwnProperty(restaurantName)) {
            dataObject[restaurantName] = {
               averageSalary: 0,
               bestSalary: 0,
               workers:[]
            };
         }
         for (let currentWorker of workersArray) {
            let [currentWorkerName, salary] = currentWorker.split(` `);
            dataObject[restaurantName].workers.push({name: currentWorkerName,salary: Number(salary)});
         }
         let totalSalary = 0;
         let maxSalary = 0;
         for (let currentWorkerAndSalary of Object.values(dataObject[restaurantName].workers)) {
            let currentSalary=currentWorkerAndSalary.salary;
            totalSalary += Number(currentSalary);
            if (Number(currentSalary) > maxSalary) {
               maxSalary = Number(currentSalary);
            }
         } // Object.values(dataObject[restaurantName].workers) = array of objects contatining worker name and salary
         dataObject[restaurantName]['averageSalary'] = (totalSalary / dataObject[restaurantName].workers.length).toFixed(2);
         dataObject[restaurantName]['bestSalary'] = maxSalary.toFixed(2);
      }
      let maximumAverage = 0;
      let maximumAverageRestaurant = '';
      for (let current of Object.keys(dataObject)) {
         if (Number(dataObject[current]['averageSalary']) > maximumAverage) {
            maximumAverage = dataObject[current]['averageSalary'];
            maximumAverageRestaurant = current;
         }
      }
      bestRestaurantReference.textContent = `Name: ${maximumAverageRestaurant} Average Salary: ${maximumAverage} Best Salary: ${dataObject[maximumAverageRestaurant]['bestSalary']}`;
      for (let currentRestaurant of Object.keys(dataObject)) {
         delete dataObject[currentRestaurant]['averageSalary'];
         delete dataObject[currentRestaurant]['bestSalary'];
      }
      let bestWorkersText = '';
      for (let currentRestaurant of Object.entries(dataObject)) {
         if (currentRestaurant[0] == maximumAverageRestaurant) {
            let workersAndSalaries = Object.values(currentRestaurant[1]);
            workersAndSalaries[0].sort((a, b) => b.salary - a.salary);
            for (let worker of workersAndSalaries[0]) {
               bestWorkersText += `Name: ${worker.name} With Salary: ${worker.salary} `
            }
            bestRestaurantWorkersReference.textContent = bestWorkersText;
            return;
         }
      }
   }
}