import React from "react";
import SignInWithPassword from "./Password";
import SignInWithGoogle from "./Google";
import {HomepageBg} from "../Homepage";
import { setLogLevel } from "firebase/app";

const Signin = () => {
    
    return (
        <>
            <div className ='signin-box'>
                <div className='email-signin'>
                    <SignInWithPassword/>
                </div>
                <SignInWithGoogle/>
            </div>
            <HomepageBg/>
        </>
    )
}

export default Signin;