import React, { useState } from 'react';

function ToggleForm({ onSearch }) {
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

    const [name, setName] = useState('');
    const [activity, setActivity] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        onSearch({ name, activity, location });
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='flex gap-10'>
            <div className='flex border-2 gap-3 border-black'>
                <div className='flex gap-3'>
                    <label htmlFor="input1">Nom-prenom:</label>
                    <input type="text" id="input1" className='rounded text-black pl-2' value={name} onChange={(e) => setName(e.target.value)} onKeyPress={handleKeyPress} />
                </div>
                <div className='flex gap-3'>
                    <label htmlFor="input2">Activite:</label>
                    <input list="activityOptions" id="input2" className='rounded text-black pl-2' value={activity} onChange={(e) => setActivity(e.target.value)} onKeyPress={handleKeyPress}/>
                    <datalist id="activityOptions">
                        <option value="droit des contrats" />
                        <option value="droit foncier " />
                         <option value="droit pénal" />
                        <option value="droit social" />
                    </datalist>
                </div>
                {showAdditionalInputs && ( <>
                    <div className='flex gap-3'>
                        <label htmlFor="input3">Ville:</label>
                        <input list="locationOptions" id="input3" className='rounded text-black pl-2' value={location} onChange={(e) => setLocation(e.target.value)} onKeyPress={handleKeyPress} />
                        <datalist id="locationOptions">
                            <option value="Blida" />
                            <option value="Bejaia" />
                            <option value="Batna" />
                        </datalist>
                    </div>
                </>
                )}
            </div>
             <button onClick={toggleForm} className='text-black border-[3px] rounded bg-white w-40 h-full border-[#D04946]'>{showmore}</button>
            <button onClick={handleSearch} className='text-black rounded w-40 h-full bg-[#D04946]'>Rechercher</button>
        </div>
    );
}

export default ToggleForm;
