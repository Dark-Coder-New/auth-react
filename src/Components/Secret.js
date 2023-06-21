import React, {useEffect, useState} from 'react';
import userApis from '../apis/userApis';

// cb04f6e5-a4de-4c49-80ba-fcb0b22f172e
const Secret = () => {
    let [secret, setSecret] = useState("")


   useEffect(()=>{
      userApis.get("/auth/secret1",{
          headers:{
                authorization: `Bearer cb04f6e5-a4de-4c49-80ba-fcb0b22f172e`
          }
      })
      .then(response => setSecret(response.data))
        .catch(err => console.log(err))
   }, []
)

function implementLogout(){
    userApis.delete("/auth/logout", {
        headers:{
            authorization: `Bearer cb04f6e5-a4de-4c49-80ba-fcb0b22f172e`
        }
    })
    .then(response => setSecret(""))
    .catch(err => console.log(err))
}



    return(
        <div>
            <h1>Secret Page</h1>
            {
            secret && secret.name && (
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