import React, {useState} from "react";
import "./login.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginUser})=>{
const navigate = useNavigate()
    const[ user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {

        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value

        })
    }
const login = () => {
    axios.post("http://localhost:5000/login", user)
    .then(res => {alert(res.data.message)
        setLoginUser(res.data.user)
        navigate("/")
    })
}

    return(
        <div className="container">
        <div class="container text-center">
  <div class="row align-items-center">
  <div class="col quote">
  The Dream is Still Alive.
    </div>
    <div class="col">
    </div>
    <div class="col">
        <div className="login">
        <h1 className="fnt-login">Login</h1>
        <input type="text" name="email" value={user.email} placeholder="Enter you Email" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
        <div className="login-btn btn btn-secondary btn-block" onClick={login}>Login</div>
        <div>or</div>
        <div className="login-btn btn btn-secondary btn-block" onClick={() => navigate("/register")}>Register</div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default Login

