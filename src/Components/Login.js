
import React, {useState} from "react";
import userApis from "../apis/userApis";

const Login = () => {

    let [loggedInUser, setLoggedInUser] = useState({
        email: "",
        password: ""
    })

    let [error, setError] = useState("")



    function handleLogin(e){
     
        e.preventDefault();
         if(!loggedInUser.email || !loggedInUser.password){
             return setError("Please fill all the fields")
         }

            // make a post request to login the user

            userApis.post("/auth/login", loggedInUser)
            .then((res) => console.log(res.data))
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
        </div>
    )
}

export default Login;