import React from 'react'
import { UserAuthG } from '../Firebase/AuthContextGoogle';
import { UserAuthE } from '../Firebase/AuthContextEmail';
import { Userinfodb } from "../Firebase/firebase"
import Navigator from './Navigator';

const Account = () => {

    const {userG} = UserAuthG();
    const { userE } = UserAuthE();

        return(
            <>
                <Navigator/>
                <h1>Welcome, {userG?.displayName || userE?.email}</h1>
            </> 
        )
    
}   

export default Account;