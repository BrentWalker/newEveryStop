const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})

app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
  // mongooose.connect('mongodb://127.0.0.127017/neweverystop')