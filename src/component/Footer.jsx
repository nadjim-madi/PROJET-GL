import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='bg-black h-40 w-full text-white flex'>
        <div className='flex items-center justify-start pl-4'>
          LOGO
        </div>
        <div className='absolute right-2 bottom-[-100px] pr-2 text-white'>
          <div>Email: <span className='text-[#D04946]'>Support@DZ-Mouhami.com</span></div>
          <div>2024 DZ-Mouhami - Terms of Service - Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
