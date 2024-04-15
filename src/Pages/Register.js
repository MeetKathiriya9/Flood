import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='register'>
            <div className="box clearfix">
                <h2 className='title'>Register</h2>
                <div className='divider2'></div>
                <div className='form'>
                    <input type="text" placeholder='Name' name='name' id='name' className='eml' /><br></br>
                    <input type="text" placeholder='Mobile No.' name='mobile' id='mobile' className='eml' /><br></br>
                    <input type="text" placeholder='Email' name='email' id='email' className='eml' /><br></br>
                    <input type="text" placeholder='Password' name='password' id='password' className='eml' /><br></br>
                    <input type="text" placeholder='Confirm Password' name='conpassword' id='conpassword' className='eml' /><br></br>
                    <input type="text" placeholder='Region' name='region' id='region' className='eml' /><br></br>
                    <button className='registerbtn'>Register</button><br></br>
                    <p className='desc'>Already registered? <Link to='/login'><span className='link'>Login</span></Link></p>
                </div>
            </div>
        </div>
    )
}
