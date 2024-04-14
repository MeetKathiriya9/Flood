import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div>

      <div className='main'>
        <div className="clearfix sec-1">
          <div className="flex1 box1">
            <p>Get started<br></br> by <span className='lg'>login</span> or <span className='rg'>register</span>.</p>
            <Link to='login'><button className='lgbtn'>Login</button></Link><br></br>
            <Link to='register'><button className='rgbtn'>Register</button></Link>
          </div>
          <div className='divider'></div>
          <div className="flex1 box2">
            <h1>Flood <br></br> <span className='mng'>Management</span> <br></br><span className='sys'>System</span></h1>
            <p>Flood Risk Management system that is made up to manage floods in city of Chennai.</p>
          </div>
        </div>
      </div>

      <div className='blog'>

        <h2 className='h2'>Blogs</h2>

        <div className='boxes'>

          <div className='box'>
            <div className='clearfix'>
              <p className='icon'><i className="remixicon-drop-line"></i></p>
              <p className='title'>Data Ketinggian Air(Real-Time)</p>
            </div>
            <hr />

            <p className='desc'>Pengguna dapat mengetahui data ketinggian air terbaru dan selalu siap kapan saja menghadapi banjir</p>
          </div>
          <div className='box'>
            <div className='clearfix'>
              <p className='icon'><i className="remixicon-drop-line"></i></p>
              <p className='title'>Data Ketinggian Air(Real-Time)</p>
            </div>
            <hr />

            <p className='desc'>Pengguna dapat mengetahui data ketinggian air terbaru dan selalu siap kapan saja menghadapi banjir</p>
          </div>
          <div className='box'>
            <div className='clearfix'>
              <p className='icon'><i className="remixicon-drop-line"></i></p>
              <p className='title'>History Ketinggian Air</p>
            </div>
            <hr />

            <p className='desc'>Pengguna dapat melihat data history ketinggian air untuk mengetahui seberapa rawan lingkungan anda dilanda banjir</p>
          </div>
          <div className='box'>
            <div className='clearfix'>
              <p className='icon'><i className="remixicon-drop-line"></i></p>
              <p className='title'>Diagram Ketinggian Air(Real-Time)</p>
            </div>
            <hr />

            <p className='desc'>Pengguna dapat mengawasi banjir setiap saat dan dapat memprediksi banjir secara dini</p>
          </div>
          <div className='box'>
            <div className='clearfix'>
              <p className='icon'><i className="remixicon-drop-line"></i></p>
              <p className='title'>Data Ketinggian Air(Real-Time)</p>
            </div>
            <hr />

            <p className='desc'>Pengguna dapat mengawasi banjir setiap saat dan dapat memprediksi banjir secara dini</p>
          </div>
          <div className='box'>
            <div className='clearfix'>
              <p className='icon'><i className="remixicon-drop-line"></i></p>
              <p className='title'>Lokasi Evakuasi</p>
            </div>
            <hr />

            <p className='desc'>Pengguna dapat mengetahui data ketinggian air terbaru dan selalu siap kapan saja menghadapi banjir</p>
          </div>
        </div>


        <div className='contact'>
          
          <h3 className='h3'>Contact Us</h3>
            <p className='p1'>+61 12356789</p>
            <p className='p2'>admin@gmail.com</p>
            <p className='p3'>123 abc street,abcd</p>
          

        </div>

        <p style={{textAlign:'center', marginTop:'160px', fontSize:'14px'}}>2024 copyright. All rights reserved.</p>

      </div>

    </div>
  )
}
