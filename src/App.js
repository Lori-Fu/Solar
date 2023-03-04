import React from "react";
import { Route, Routes } from "react-router-dom";
import {Homepage} from "./Components/Homepage.js";
import Signin from "./Components/Signin/Signin.js";
import Signup from "./Components/Signin/Signup.js";
import SuccessSignup from './Components/Signin/SuccessSignup.js'
import Account from "./Components/Account.js";
import { AuthContextProviderG } from "./Firebase/AuthContextGoogle";
import { AuthContextProviderE } from "./Firebase/AuthContextEmail.js";
import PrivateRoute from "./Components/PrivateRoute.js";

import "./App.css";

function App() {
  
  return (
    <>
    <AuthContextProviderE>
      <AuthContextProviderG>
        <Routes> 
          <Route path='/' element={<Homepage/>} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/success-signup' element={<SuccessSignup />} />
          <Route element={<PrivateRoute/>}>
            <Route path='/account' element={<Account/>} />
          </Route>
          {/* <Route path='*' element={<div> Page Not Found</div>} /> */}
        </Routes>
      </AuthContextProviderG>
      </AuthContextProviderE>
    </>
  );
}

export default App;
