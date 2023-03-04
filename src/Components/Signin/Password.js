import React, { useState } from "react";
import { UserAuthE } from "../../Firebase/AuthContextEmail";
import { Link, useNavigate } from 'react-router-dom';

const SignInWithPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loginE} = UserAuthE();
    const [error, SetError] =  useState('');
    const [loading, SetLoading] = useState(false);
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        try{
            SetError('');
            SetLoading(true);
            const userCredential = loginE(email, password)
            .then(() => {
                // console.log(userCredential)
            })
            navigate('/account');
        }catch{
            SetError(error);
            alert(error);
        };
    };
    return(
        <div className="LogInBox">
            <form onSubmit={submit}>
                <h1>Log In</h1>
                <div id='email'>
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div><div id='password'>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <input type="submit" value="Log In"></input>
            </form>
            <Link to='/signup'>Doesn't have an account?</Link>
        </div>
    )
}

export default SignInWithPassword;