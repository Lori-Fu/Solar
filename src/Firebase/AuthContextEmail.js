import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../Firebase/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthContext = React.createContext();

export const AuthContextProviderE = ({children}) => {
    const [userE, setUserE] = useState({});
    const [loading, setLoading] = useState(true);

    const signupE = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginE = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logoutE = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userE => {
            setUserE(userE);
            setLoading(false);
    })
        return unsubscribe;
    },[])

    return (
        <AuthContext.Provider value={{signupE, loginE, logoutE, userE}}>
            {!loading && children}
        </AuthContext.Provider>
  )
}

export const UserAuthE = () => {
    return useContext(AuthContext);
}
