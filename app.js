const express = require('express');
const app = express();

const hbs = require('hbs');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res, next) => { 
    res.render("index");
});

app.get("/login", (req, res, next) => {
    res.render("login");
  });

app.post('/login', (req, res, next) => {

    const { username, password } = req.body;

    console.log(username);
    console.log(password);


if (username === 'Ivana' && password === '123') {
    res.render('success.hbs');
}   else {
    res.render('error.hbs');
} 
});
   







app.listen(3000, () => {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});