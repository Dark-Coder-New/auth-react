import axios from 'axios'; 


const userApis = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export default userApis;