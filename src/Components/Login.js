import React from 'react';


const Login = () => {

    return (
        <div className= 'login'>
            <h1>Login </h1> 
            <form>
            <h2 className= ''>Username:</h2>
                <input type = 'text' placeholder = 'name'/>
            </form>
            <form>
            <h2 className= ''>Password:</h2>
                <input type = 'text' placeholder = 'name'/>
            </form>
            <button className= '' >Submit</button>
        </div>

    )

}

export default Login;