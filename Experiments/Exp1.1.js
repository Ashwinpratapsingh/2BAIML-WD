//Perform CRUD operations on files using fs module
const fs = require('fs');

// CREATE - Create a file and write data
fs.writeFileSync('data.txt', 'Hello, this is my file.');

// READ - Read data from the file
const data = fs.readFileSync('data.txt', 'utf8');
console.log('File Content:', data);

// UPDATE - Add more data to the file
fs.appendFileSync('data.txt', '\nthis is updated content.');

// DELETE - Delete the file
fs.unlinkSync('data.txt');

console.log('File deleted successfully.');