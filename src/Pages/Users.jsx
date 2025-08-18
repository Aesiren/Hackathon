
import '../App.css'
import { useState, useEffect, useContext } from 'react'
import cookie from 'cookie';
import { UserContext } from "../Context/UserContext";
import cookieParser from 'cookie-parser';



function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  // async function sendLoginInfo(formData) {

  //   let userName = formData.get('username');
  //   let password = formData.get('password');

  //   //if login successful
  //   let check = await fetch(`http://localhost:3001/user/${userName}/${password}`);
  //   console.log("Received information from server: ", check.headers.getSetCookie());
  //   if (check) {
  //     console.log("Setting cookie with: ", check)
  //     setUser(check);
  //   }

  // }


  return (
    <div className="users">
      {users.map((user) => {
        return (
          <div>
            <label>id: </label>{user.id}
            <label>Name: </label>{user.name};
          </div>
        )

      })}
    </div>
  )
}

export default Users;