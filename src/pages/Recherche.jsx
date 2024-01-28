import React from 'react'
import Navbar from '../component/Navbar'
import ToggleForm from '../component/ToggleForm'
import LawyerList from '../component/LawyerList'

function Recherche() {
  return (
      <div>
          <Navbar />
          <div className='w-full relative p-10 text-white bg-black gap-3 grid justify-center content-center'>
              <ToggleForm />
              
          </div>
          <div className='flex items-center justify-center text-left'>
              <LawyerList/>
          </div>
    </div>
  )
}

export default Recherche