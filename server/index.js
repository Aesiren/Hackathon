const express = require('express');
const app = express();
const port = 3001;
const classes = require('./Data/Classes.js');
const ancestry = require('./Data/Ancestry.js');
const community = require('./Data/Community.js');
const domain = require('./Data/Domains.js');
const traits = require('./Data/Traits.js');
const cors = require('cors');

app.use(cors())

app.get('/classes', (req, res) => {
  res.status(200).json(classes);
  console.log("received request for classes")
})

app.get('/ancestry', (req, res) => {
  res.status(200).json(ancestry);
})

app.get('/community', (req, res) => {
  res.status(200).json(community);
})

app.get('/domain', (req, res) => {
  res.status(200).json(domain);
})

app.get('/traits', (req, res) => {
  res.status(200).json(traits);
})

app.listen(port, () => {
  console.log('Daggerheart Server listening on port ' + port);
})
module.exports = app;