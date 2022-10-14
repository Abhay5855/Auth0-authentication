


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { loginAPI} from '../../api/login';


const Login = () => {

    const {
        isAuthenticated,
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        getAccessTokenSilently
      } = useAuth0();


      const loginProtectedAPI = async() => {

        const token =  await getAccessTokenSilently();

        console.log(token);
    
        // axios.get('http://localhost:8080/protected')
        // .then((res) => {
              
        //     console.log(res.data);
             
        // })
        // .catch((err) => {
        //     console.log(err.message)
        // })
    
         
    }

  
  return (

    <>

    <button onClick={loginWithPopup}>
        login to i2i
    </button>

    <button onClick={loginWithRedirect}>Login with Redirect</button>
    <button onClick={logout}>
      logout
    </button>

    <button onClick={loginProtectedAPI}>
      Login with protected API
    </button>

    <button onClick={loginAPI}>
      Login with api (normal route)
    </button>

    <div>
        <h3>{isAuthenticated ?  "User is logged in" : "user is not Authenticated"}</h3>
    </div>

    {
        isAuthenticated && (

            <pre style={{textAlign : 'start'}}>
                {
                    JSON.stringify(user , null , 2)
                }
            </pre>
        )
    }

    </>
   
  );
      

  
}

export default Login
