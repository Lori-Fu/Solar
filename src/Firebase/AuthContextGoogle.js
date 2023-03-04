import { useContext, createContext, useEffect, useState } from "react";
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from './firebase.js';

const AuthContext = createContext();

export const AuthContextProviderG = ({children}) => {
    const [userG, setUserG] = useState({});
    const signinG = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        // signInWithRedirect(auth, provider).then((result) => {
        //     console.log(result);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    };

    const logoutG = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userG) => {
            setUserG(userG)
        });
        return () => {
            unsubscribe();
        }
    },[]);

    return (
        < AuthContext.Provider value = {{signinG, logoutG, userG}} >
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuthG = () => {
    return useContext(AuthContext);
}