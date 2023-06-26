import React,{useState} from "react"; 
import userApis from "../apis/userApis";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const navigate = useNavigate();

    // console.log(formData);

    async function handleSignup(e){
        e.preventDefault();

        if(!formData.name || !formData.email || !formData.password || !formData.confirmPassword){
            setSuccess("")
          return setError("Please fill all the fields")
        }
        // password and conform passwor dshould be same
        try{
          const userResponse = await userApis.post("/auth/signup", formData)
          console.log(userResponse);
          setError("")
          setSuccess(userResponse.data.message)
          alert("User created successfully")
          navigate("/login")
        }
        catch(err){
             console.log(err);
             console.log(err.response)
             setSuccess("")
             setError(err.response.data.error)
        }
   

    }




    return(
        <div>
              <form onSubmit={handleSignup}>
                     <input type="text" placeholder="Name" 
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                     />
                     <input type="text" placeholder="Email" 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                     />
                     <input type="text" placeholder="Password" 
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                     />
                     <input type="text" placeholder="Confirm Password" 
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                     />
                     <button type="submit">Sign Up</button>

              </form>
              {
                success && <p>{success}</p>
              }
              {
                error && <p>{error}</p>
              }
        </div>
    )
}

export default SignUp;