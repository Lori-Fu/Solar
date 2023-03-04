import React from 'react'
import { Link } from 'react-router-dom'

const SuccessSignup = () => {
  return (
    <div>
        <h3>Successfully Sign Up</h3>
        <Link to='/signin'>click here to your account</Link>
    </div>
  )
}

export default SuccessSignup