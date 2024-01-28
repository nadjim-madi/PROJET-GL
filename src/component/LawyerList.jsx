import { React, useState, useEffect } from 'react';
import lawyersData from '../db/data.json';
import lawyerIMG from '../assets/lawyer_jason_burress_72773_1686331478.jpg.png';

function LawyerList() {
  
// Mapping between language abbreviations and full names
const languageMap = {
  fr: 'Français',
  an: 'Anglais',
  ar: 'Arabe',
  es: 'Espagnol',
  kb: 'Kabyle'
};
const number = '95'
const [lawyers, setLawyers] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        fetch('http://127.0.0.1:8000/api/search_lawyers/')
            .then(response => response.json())
            .then(data => setLawyers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

  return (
    <div>
      <h1 className='mt-2 text-5xl'>{lawyers.length} Lawyers</h1>
      <div className='mb-20'>
        {lawyersData.lawyers.map(lawyer => (
          <div key={lawyer.id} className='flex gap-3 bg-cover border-slate border-dotted border-b-2 mt-10 pb-10'>
            <img src={lawyerIMG} alt="lawyer image" className=''/>
            <div><h2 className='text-3xl '>{lawyer.name}</h2>
          <p>Activity: {lawyer.activity}</p>
          <p>
                  Languages:
            <div className="flex gap-3">
               {lawyer.language.map(lang => (
    <img 
        key={lang} 
        src={`https://flagsapi.com/${lang}/flat/64.png`} 
        alt={lang} 
        style={{ width: '30px', height: 'auto' }} 
    />
))}

                </div>
              </p>
            </div>
          
          </div>
          
        ))}
        
      </div>
      
    </div>
  );
}

export default LawyerList;
