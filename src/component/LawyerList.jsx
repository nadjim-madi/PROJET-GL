import React from 'react';
import lawyerIMG from '../assets/lawyer_jason_burress_72773_1686331478.jpg.png'

function LawyerList({ lawyers }) {
    return (
        <div className="w-[700px]">
            <h1 className='mt-2 text-5xl'>{lawyers.length} Lawyers</h1>
            <div className='mb-20'>
                {lawyers.map(lawyer => (
                    <div key={lawyer.id} className='flex gap-20 items-center bg-cover border-slate border-dashed border-b-2 mt-10 pb-10'>
                        <img src={lawyerIMG} alt="lawyer image" />
                        <div className='flex flex-col  w-1/2'>
                            <h3 className='text-xl'>{lawyer.name}</h3>
                            <div>{lawyer.wilaya}</div>
                            <div className='flex items-center justify-center'>
                                {Array.isArray(lawyer.categories) ? (
                                    <p>Activity: {lawyer.categories.join(', ')}</p>
                                ) : (
                                    <p>Activity: {lawyer.categories}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LawyerList;
