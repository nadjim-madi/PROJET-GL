import React from 'react';
import logo1 from '../assets/white\ logo.png'

function Footer() {
  return (
    <footer>
      <div className='bg-black h-40 w-full text-white flex'>
        <div className='flex items-center justify-start pl-4'>
          <img src={logo1} alt="logo" />
        </div>
        <div className='absolute right-2 bottom-[-50px] pr-2 text-white'>
          <div>Email: <span className='text-[#D04946]'>Support@DZ-Mouhami.com</span></div>
          <div>2024 DZ-Mouhami - All the rights are reserved</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
