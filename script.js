let promise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve(1000 / 1000); // Resolve with time taken in seconds
   }, Math.floor(Math.random() * 3000) + 1000); // Random time between 1 and 3 seconds
});

let promise2 = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve(2000 / 1000); // Resolve with time taken in seconds
   }, Math.floor(Math.random() * 3000) + 1000); // Random time between 1 and 3 seconds
});

let promise3 = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve(3000 / 1000); // Resolve with time taken in seconds
   }, Math.floor(Math.random() * 3000) + 1000); // Random time between 1 and 3 seconds
});

let promises=[promise1,promise2,promise3]
// Use Promise.all to wait for all promises to resolve
Promise.all(promises)
   .then((results) => {
       // Get the table body element
       const tbody = document.getElementById('output');
       // Clear loading text
       tbody.innerHTML = '';
       console.log(results)
       // Populate table with results
       results.forEach((time, index) => {
           const row = document.createElement('tr');
           row.innerHTML = `
               <td>Promise ${index + 1}</td>
               <td>${time}</td>
           `;
           tbody.appendChild(row);
       });

       // Calculate total time taken
      let totalTime = 0;
        for (let i = 0; i < results.length; i++) {
            totalTime += results[i];
        }

       // Add total row
       const totalRow = document.createElement('tr');
       totalRow.innerHTML = `
           <td>Total</td>
           <td>${totalTime.toFixed(3)}</td>
       `;
       tbody.appendChild(totalRow);
   })
   .catch((error) => {
       console.error('Error:', error);
   });