const Login = require('./login.js');
const express = require('express');
const app = express();
const port = 3001;
const classes = require('./Data/Classes.js');
const ancestry = require('./Data/Ancestry.js');
const community = require('./Data/Community.js');
const domain = require('./Data/Domains.js');
const traits = require('./Data/Traits.js');
const cors = require('cors');
const users = require('./Users/userInfo.js');
const cookies = require('cookie');

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development'])

app.use(cors())


// app.get('/user', function (req, res) {
//   res.status(200).json(users);
// })

// app.get('/user/:userId', function (req, res) {
//   console.log("Params: ", req.params);
//   console.log("User Id: ", req.params.userId);

//   //res.status(200).json(users.)
//   res.send("parameters sent to console")

// })

app.get('/user/:userName/:userPass', function (req, res) {
  // console.log("Params: ", req.params);
  // res.send("parameters sent to console");
  console.log('Requesting login verification')
  let userID = Login(req.params.userName, req.params.userPass);

  if (userID > 0) {
    console.log("USer authenticated; ", userID);
    res.cookie(`userID`, userID).send();
    //res.send();
    //res.send(response);
  } else {
    console.log("User not authenticated; ", userID);
    res.status(401);
  }
})

app.get('/users', function (req, res) {
  console.log('User info called');
  knex('user')
    .select('*')
    .from('user_table')
    .then(data => {
      res.status(200).json(data);
      console.log(data);
    })
})

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