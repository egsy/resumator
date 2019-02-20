const express = require('express');
const fs = require('fs');
// const Handlebars = require('handlebars');
const hbs = require('hbs');
const exphbs = require('express-handlebars');
const theme = require('./index.js');
const path = require('path');
const schema = require('resume-schema');


const app = express();
app.engine('.hbs', exphbs({
  defaultLayout: 'resume',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.set('views', __dirname, 'views');

// const localResume = fs.readFileSync(path.join(__dirname, 'views/layouts/resume.json'), 'utf-8');
// const myresume = theme.render(localResume);

app.get("/", (req, res) => {
    // try {
      res.render('resume');
    // } catch (e) {
        // return schema.localResume;
    }
  // return JSON.parse(localResume);
);

let listener = app.listen(
    process.env.PORT, () => {
        console.log('great success! app listening on ' + listener.address().port);
    }
);