import React from 'react'
import Navbar from '../components/Navbar'
import Details from '../components/Details'
import Footer from '../components/Footer'
import imggg from '../imggg.png'



export default function Experiences() {
  return (
    <div className='container-fluid'>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imggg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(7px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      ></div>

      <div className="row" style={{ zIndex: 1, position: 'relative' }}>
        <Navbar />
      </div>
      <div className="row" style={{ zIndex: 1, position: 'relative' }}>
        <Details />
      </div>
      
      <div className="row" style={{ zIndex: 1, position: 'relative' }}>
        <Footer />
      </div>

    </div>
  )
}
