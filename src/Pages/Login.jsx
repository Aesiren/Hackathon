import '../App.css'
import { useContext } from 'react'
import cookie from 'cookie';
import { UserContext } from "../Context/UserContext";
import cookieParser from 'cookie-parser';



function Login() {
  const { setUser } = useContext(UserContext);
  async function sendLoginInfo(formData) {

    let userName = formData.get('username');
    let password = formData.get('password');

    //if login successful
    let check = await fetch(`http://localhost:3001/user/${userName}/${password}`);
    console.log("Received information from server: ", check.headers.getSetCookie());
    if (check) {
      console.log("Setting cookie with: ", check)
      setUser(check);
    }

  }


  return (
    <div className="login">
      <form className="login-form" action={sendLoginInfo}>
        <label>Username: </label><input type='text' name='username' required='true' />
        <br />
        <label>Password</label><input type='text' name='password' required='true' />
        <br />
        <button className="login-button" type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login;