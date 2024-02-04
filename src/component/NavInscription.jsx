import React, { useState } from 'react';
import FormAvocat from './FormAvocat';
import FormParticulier from './FormParticulier';// Assuming the file path is correct

function NavInscription() {
    const [avocatClicked, setAvocatClicked] = useState(true);
    const [particulierClicked, setParticulierClicked] = useState(false);

    const handleAvocatClick = () => {
        setAvocatClicked(true);
        setParticulierClicked(false);
    };

    const handleParticulierClick = () => {
        setAvocatClicked(false);
        setParticulierClicked(true);
    };

    return (
        <div className='max-w-screen-md mx-auto'>
            <div className='flex justify-center w-full relative top-16 border-2'>
                <div
                    className={`w-1/2 border-r-2 flex items-center justify-center cursor-pointer bg-slate-200 ${
                        particulierClicked ? 'border-[#D04946] border-b-4 border-r-slate-200 bg-transparent' : ''
                    }`}
                    onClick={handleParticulierClick}
                >
                    JE SUIS PARTICULIER/ENTREPRISE
                </div>
                <div
                    className={`w-1/2 flex items-center justify-center cursor-pointer bg-slate-200 ${
                        avocatClicked ? 'border-[#D04946] border-b-4 bg-transparent' : ''
                    }`}
                    onClick={handleAvocatClick}
                >
                    JE SUIS UN AVOCAT
                </div>
            </div>
            {avocatClicked && <FormAvocat />} {particulierClicked && <FormParticulier/>}
        </div>
    );
}

export default NavInscription;
