import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import ToggleForm from '../component/ToggleForm';
import LawyerList from '../component/LawyerList';
import lawyersData from '../db/scraped_data.json';

function Recherche() {
    // Initialize state for filtered lawyers, initially set to full list
    const [filteredLawyers, setFilteredLawyers] = useState(lawyersData.lawyers);

    // Function to handle search based on user input
    const handleSearch = ({ name, activity, location }) => {
    const filtered = lawyersData.lawyers.filter(lawyer => {
        // Check if name matches or is unspecified
        const nameMatch = !name || lawyer.name.toLowerCase().includes(name.toLowerCase());
        // Check if activity matches or is unspecified
        const activityMatch = !activity || lawyer.categories.some(category => category.toLowerCase() === activity.toLowerCase());
        // Check if location matches or is unspecified
        const locationMatch = !location || lawyer.wilaya.toLowerCase() === location.toLowerCase();
        return nameMatch && activityMatch && locationMatch;
    });
    setFilteredLawyers(filtered);
};


    return (
        <div>
            <Navbar />
            <div className='w-full relative p-10 text-white bg-black gap-3 grid justify-center content-center'>
                {/* Pass handleSearch function to ToggleForm component */}
                <ToggleForm onSearch={handleSearch} />
            </div>
            <div className='flex items-center justify-center text-left'>
                {/* Pass filteredLawyers to LawyerList component */}
                <LawyerList lawyers={filteredLawyers} />
            </div>
        </div>
    );
}

export default Recherche;
