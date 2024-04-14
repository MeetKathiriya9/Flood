import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <div className="box clearfix">
            <h2 className='title'>Login</h2>
            <div className='divider2'></div>
            <div className='form'>
                <input type="text" placeholder='Email' name='email' id='email' className='eml'/><br></br>
                <input type="text" placeholder='Password' name='password' id='password' className='pwd'/><br></br>
                <button className='loginbtn'>Login</button><br></br>
                <p className='desc'>Not register yet? <Link to='register'><span className='link'>Register</span></Link></p>
            </div>
        </div>
    </div>
  )
}
