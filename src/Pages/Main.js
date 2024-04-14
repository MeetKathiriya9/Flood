import React from 'react'

export default function Main() {
  return (
    <div>

      <div className='main'>
        <div className="clearfix sec-1">
          <div className="flex1 box1">
            <p>Get started<br></br> by <span className='lg'>login</span> or <span className='rg'>register</span>.</p>
            <button className='lgbtn'>Login</button><br></br>
            <button className='rgbtn'>Register</button>
          </div>
          <div className='divider'></div>
          <div className="flex1 box2">
            <h1>Flood <br></br> <span className='mng'>Management</span> <br></br><span className='sys'>System</span></h1>
            <p>Flood Risk Management system that is made up to manage floods in city of Chennai.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
