import React, { useState } from 'react';

function ToggleForm() {
    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
    const [showmore, setShowmore] = useState("Show more filters");

    const toggleForm = () => {
        setShowAdditionalInputs(!showAdditionalInputs);
        if (showAdditionalInputs === false) {
            setShowmore("Show less filters")
        } else { 
            setShowmore("Show more filters")
        }
    };

    return (
        <div className='flex gap-10'>
            

            <div className='flex border-2 gap-3 border-black'>
                <div className='flex gap-3'>
                    <label htmlFor="input1">Name:</label>
                    <input type="text" id="input1" className='rounded' />
                </div>
                <div className='flex gap-3'>
                    <label htmlFor="input2">Activity:</label>
                    <input  list="activityOptions" id="input2" className='rounded text-black ' />
                    <datalist id="activityOptions">
                        <option value="Avocat général" />
                        <option value="Avocat spécialisé" />
                    </datalist>
                </div>
                {showAdditionalInputs && (
                    <>
                        <div className='flex gap-3'>
                            <label htmlFor="input3">Location:</label>
                            <input  list="locationOptions" id="input3" className='rounded text-black ' />
                            <datalist id="locationOptions">
                                <option value="Blida" />
                                <option value="Bejaia" />
                                <option value="Batna" />
                            </datalist>
                        </div>
                        <div className='flex gap-3'>
                            <label htmlFor="input4">Language:</label>
                            <input  list="languageOptions" id="input4" className='rounded text-black ' />
                            <datalist id="languageOptions">
                                <option value="Français" />
                                <option value="Arabe" />
                                <option value="Kabyle" />
                                <option value="Anglais" />
                            </datalist>
                        </div>
                    </>
                )}
            </div>
            <button onClick={toggleForm} className='text-black border-[3px] rounded bg-white w-40 h-full border-[#D04946]'>{showmore}</button>
            <button className='rounded w-40 bg-[#D04946]'>Rechercher</button> 
            {/*had le button rah yeb3eth wech kheyer le client l db bach teb3ethlou wech  demanda */}
        </div>
    );
}

export default ToggleForm;
