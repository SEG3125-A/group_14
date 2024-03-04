// results.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch survey results from JSON file
    fetch('/getResults')
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.error('Error fetching survey results:', error));
  
    // Function to display survey results
    function displayResults(results) {
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '';
  
      // Iterate through results and display them
      results.forEach(result => {
        const resultElement = document.createElement('div');
        // resultElement.innerHTML = `<strong>${result.username}</strong>: ${result['enjoyment-scale']} - ${result['instagram-services']} - ${result.usage.join(', ')} - ${result.final}`;
        resultElement.innerHTML = `
    <ul class="list-group">
      <li class="list-group-item" id="user"><strong> Name: ${result.username}</strong></li>
      <li class="list-group-item" id="enjoyment">Enjoyment: ${result['enjoyment-scale']}</li>
      <li class="list-group-item" id="service">Service: ${result['instagram-services']}</li>
      <li class="list-group-item" id="usage">Usage: ${result.usage.join(', ')}</li>
      <li class="list-group-item" id="comment">Comments: ${result.final}</li>
    </ul>`;
        
        resultsContainer.appendChild(resultElement);
      });
    }
  });
  