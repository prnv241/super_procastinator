
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const todos = require('./routes/api/todos');

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected");
  })
  .catch(err => {
    console.log("ERROR:", err.message);
  });

app.use('/api/todos', todos);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
