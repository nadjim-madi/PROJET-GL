import React from 'react'
import logo from "../assets/LOGO.png"

function Navbar() {
  return (
      <div>
          <br />
          <br />
          <div className='border-b-2  border-b-[#ECECEC] '>
              <a href="/inscription">
          <button className='rounded-full text-2xl bg-[#D04946] pb-2 px-2 top-1 right-2 absolute text-white'>
            connexion
          </button>
        </a>
            <div>
                  <div className='flex gap-12 ml-3 top-2 absolute text-[#25233B] text-2xl'>
            <div>
              <img src={logo} alt="logo" className='w-32' />
                      </div>
                      <a href="#">HOME</a>
                      <a href="/recherche">PRENDRE UN RENDEZ-VOUS</a>
                      <a href="/apropos">A PROPOS</a>
                  </div>      
              </div>  
              
          </div>
          
    </div>
  )
}

export default Navbar