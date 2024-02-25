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
  console.log('Form submitted successfully!');
  // Show results page
  res.redirect('/results');
});


// Function to save form data to a JSON file
function saveFormDataToJson(formData) {
  const dataFilePath = path.join(__dirname, 'data', 'formData.json');

  try {
    const jsonData = JSON.stringify([formData], null, 2);
    fs.writeFileSync(dataFilePath, jsonData);
    console.log('Form data saved to formData.json');
  } catch (error) {
    console.error('Error writing form data to file:', error);
  }
}

// Redirect to survey page
app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

// Serve survey results from the JSON file
app.get('/getResults', (req, res) => {
  const dataFilePath = path.join(__dirname, 'data', 'formData.json');

  // Read existing data
  try {
    const rawData = fs.readFileSync(dataFilePath);
    const formData = JSON.parse(rawData);

    // Send the form data as JSON
    res.json(formData);
  } catch (error) {
    console.error('Error reading existing data:', error);
    res.status(500).send('Internal Server Error');
  }
});


// Redirects the default path to the survey
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/results.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'results.js'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
