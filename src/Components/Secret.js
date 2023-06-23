import React, {useEffect, useState, useContext} from 'react';
import userApis from '../apis/userApis';
import authContext from "../context/authContext";
import { useNavigate } from 'react-router-dom';

// cb04f6e5-a4de-4c49-80ba-fcb0b22f172e
const Secret = () => {
    let [secret, setSecret] = useState("")

    let {token,setToken} = useContext(authContext)

    console.log("token", token)

    let navigate = useNavigate()


   useEffect(()=>{
      userApis.get("/auth/secret1",{
          headers:{
                authorization: `Bearer ${token}`
          }
      })
      .then(response => setSecret(response.data))
        .catch(err => console.log(err))
   },[])


function implementLogout(){
    userApis.delete("/auth/logout", {
        headers:{
            authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        setToken("")
        setSecret("")
        alert("Logged out successfully")
        navigate("/login")
    })
    .catch(err => console.log(err))
}



    return(
        <div>
            <h1>Secret Page</h1>
            {
            secret && secret.loggedInAgentDetails && (
                <div>
                    <h2>Welcome {secret.loggedInAgentDetails.name}</h2>
                    <p>{secret.message}</p>
                    <button onClick={implementLogout}> Logout </button>
              </div>
            )
            }
        </div>
    )
}

export default Secret;