import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { auth, Userinfodb } from "../../Firebase/firebase"
import {HomepageBg} from "../Homepage";
import { UserAuthE } from '../../Firebase/AuthContextEmail';
import { collection, addDoc } from "firebase/firestore/lite";


const SignUpWithPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [usertype, setUsertype] = useState('client');

    const { signupE, userE } = UserAuthE();
    const [error, SetError] =  useState('');
    const [loading, SetLoading] = useState(false);

    const navigate = useNavigate();

    const saveChanges = async () => {
        
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            SetError('');
            SetLoading(true);
            const userCredential = await signupE(email, password)
            .then(async (userCredential) => {
                addDoc(collection(Userinfodb, "Userinfo"), {
                userid: userCredential.user.uid,
                username: username,
                location: location,
                phone: phone,
                email: email
                })
            })
            navigate('/success-signup');
        }catch {
            SetError(error);
            alert(error);
        };
        SetLoading(false)
    }  

    return(
        <>
            <HomepageBg/>
            <div className ='signin-box-2'>
                <div className='email-signin-2'>
                    <div className='LogInBox-2'>
                        <form onSubmit={handleSubmit}>
                            <h2>Create your account</h2>
                            <input 
                                type='text' 
                                placeholder='Enter your email' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            <input 
                                type='password'
                                placeholder='Enter your password' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            <input 
                                type="text" 
                                placeholder="Enter your username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                            <input 
                                type="text" 
                                placeholder="Enter your state" 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)}
                            ></input>
                            <input 
                                type="text" 
                                placeholder="Enter your phone number" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)}
                            ></input>
                            <div id='usertype-selector'>
                                <label htmlFor="usertype">You are signing up as a:</label>
                                <select id='selector' value={usertype} onChange={(e) => setUsertype(e.target.value)}>
                                    <option>client</option>
                                    <option>sales person</option>
                                    <option>manager</option>
                                    <option>ground team</option>
                                </select>
                            </div>
                            <input disabled={loading} type="submit" value="Sign Up"></input>
                        </form>
                        <Link to='/signin'>Already have an account?</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SignUpWithPassword;