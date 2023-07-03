const express = require('express')

const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

app.get('/home', (request, response)=>{
    response.sendFile(__dirname + '/views/home.html')
})
app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html')
})
app.get('/works', (request, response)=>{
    response.sendFile(__dirname + '/views/works.html')
})
app.get('/gallery', (request, response)=>{
    response.sendFile(__dirname + '/views/gallery.html')
})

// ... the previously added code
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));
