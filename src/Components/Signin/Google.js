import React, { useEffect } from "react";
import { GoogleButton } from 'react-google-button';
import { UserAuthG } from "../../Firebase/AuthContextGoogle";
import { useNavigate } from "react-router-dom";

const SignInWithGoogle = () => {
    const {signinG, userG} = UserAuthG();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try{
            await signinG();
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if (userG != null){
            navigate('/account');
        }
    },[userG]);
    return <GoogleButton id='Google' onClick={handleGoogleSignIn}/>
}

export default SignInWithGoogle;