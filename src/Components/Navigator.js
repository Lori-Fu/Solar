import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuthG } from '../Firebase/AuthContextGoogle';
import { UserAuthE } from '../Firebase/AuthContextEmail';

const Navigator = () => {
    const {userG, logoutG} = UserAuthG();
    const {userE, logoutE} = UserAuthE();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try{
            if (userG){
                logoutG();
            }
            if (userE){
                logoutE();
            }
            navigate('/signin');
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div>
            <nav>
                <div className='navLeft'>
                    <img id='Navlogo' src='https://api.freelogodesign.org/assets/thumb/logo/5072150_400.png?t=637946206510000000' alt='logo'></img>
                    <h3>Easy Scrum</h3>
                </div>
                <div className='navRight'>
                    {(userG?.displayName || userE?.email)? <div className='navRightButton'><Link to='/account' className='SigninButton'>My Account</Link><button onClick={handleSignOut} className='SigninButton'>Log Out</button></div> : <div className='navRightButton'><Link to='/signin' className='SigninButton'>Sign In</Link></div>}
                </div>
            </nav>
        </div>

  )
}

export default Navigator