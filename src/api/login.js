

import axios from "axios";



export const loginAPI = () => {

    axios.get('http://localhost:8080/')
    .then((res) => {
          
        console.log(res.data);
         
    })
    .catch((err) => {
        console.log(err.message)
    })

     
}

