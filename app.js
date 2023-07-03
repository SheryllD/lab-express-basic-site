const express = require('express'); 

//we create our own server named app in here 
// Express server will be handeling requests and responses
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('<h1> My root route </h1>')
}); 

app.listen(3000, () => {
    console.log("server is listening on port 3000");
}); 

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/index.html')
}); 

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
}); 

app.get('/contact', (request, response) => {
    response.sendFile(__dirname + '/views/contact.html')
}); 
app.get('/work', (request, response) => {
    response.sendFile(__dirname + '/views/work.html')
}); 

app.listen(3000, () => console.log('My first app listening on port 3000!'))