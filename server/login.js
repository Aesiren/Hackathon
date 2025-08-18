const users = require('./Users/userInfo.js');

function Login(username, password) {
  let user;
  let pass;
  const userInfo = users.users;
  console.log("Login script received ", username, password);

  console.log(userInfo.length)
  for (let x = 0; x < userInfo.length; x++) {
    console.log("Starting name check for: ", username);
    if (userInfo[x].userName === username) {
      user = userInfo[x];
      x = userInfo.length;
      console.log("User found ", user);
    } else {
      user = undefined;
      console.log("No user found")
    }
  }

  if (user != undefined) {

    let checkId = user.userId;
    let checkPass = user.password;
    console.log("Starting check on password for: ", checkId)

    if (checkPass === password) {
      console.log("Passwords match")
      pass = true;
    } else {
      console.log("Passwords do not match")
      pass = false;
    }

  } else {
    return false;
  }


  if (user != undefined && pass) {
    console.log("User id: ", user.userId);
    return user.userId;
  } else {
    return false;
  }

}


module.exports = Login;