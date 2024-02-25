const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;

  // Process the form data as needed (you can customize this part)
  console.log('Form Data:', formData);

  // Save the form data to a JSON file
  saveFormDataToJson(formData);

  // Process the form data...
  res.send('Form submitted successfully!');
});


// Function to save form data to a JSON file
function saveFormDataToJson(formData) {
  const dataFilePath = path.join(__dirname, 'data', 'formData.json');

  // Read existing data (if any)
  let existingData = [];
  try {
    const rawData = fs.readFileSync(dataFilePath);
    existingData = JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading existing data:', error);
  }

  // Add new form data to the existing data
  existingData.push(formData);

  // Write the updated data back to the JSON file
  try {
    const jsonData = JSON.stringify(existingData, null, 2);
    fs.writeFileSync(dataFilePath, jsonData);
    console.log('Form data saved to formData.json');
  } catch (error) {
    console.error('Error writing form data to file:', error);
  }
}



// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
