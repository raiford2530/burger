const express = require('express');
const exphbs = require('express-handlebars');
const orm = require('./config/orm');
const burger = require('./models/burger')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));

const routes = require('./controllers/burgers_controller');
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
  });
