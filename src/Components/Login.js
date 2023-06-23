
import React, {useState,useContext} from "react";
import userApis from "../apis/userApis";
import authContext from "../context/authContext";
import {useNavigate} from "react-router-dom";


const Login = (props) => {

    let [loggedInUser, setLoggedInUser] = useState({
        email: "",
        password: ""
    })

    let [error, setError] = useState("")

    let {token,setToken} = useContext(authContext);

    const navigate = useNavigate();



    function handleLogin(e){
     
        e.preventDefault();
         if(!loggedInUser.email || !loggedInUser.password){
             return setError("Please fill all the fields")
         }

            // make a post request to login the user

            userApis.post("/auth/login", loggedInUser)
            .then((res) => {
                console.log(res.data)
                setToken(res.data.data.token)
                navigate("/secret")


            })
            .catch((err) => console.log(err))

    }



    return(
        <div>
                <form>  
                          <input type="email" placeholder="Email" 
                            onChange={(e) => setLoggedInUser({...loggedInUser, email: e.target.value})}
                          />

                          <input type="password" placeholder="Password" 
                            onChange={(e) => setLoggedInUser({...loggedInUser, password: e.target.value})}
                          />

                          <button type="submit"  onClick={handleLogin}>Login</button>

                </form>
                {props.children}
        </div>
    )
}

export default Login;