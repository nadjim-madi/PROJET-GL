import React, {useState} from 'react'

function FormAvocat() {
    const [identifiant, setIdentifiant] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform actions with the submitted data
        console.log('Submitted: ', { identifiant, password });
        // You can send the data to an API or perform other operations
    }
    return (
          <div>
                <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto">
      <div className='flex justify-center w-full relative top-16 border-2'>
                  <div className='w-full border-r-2 items-center justify-center cursor-pointer ml-16' >
                      <div className='my-3 '>
                          <div className='font-bold'>Espace sécurisé des Avocats</div>
                          <div className='font-thin'>Connectez-vous avec votre cle de certification ou votre identifiant</div>
                      </div>
                        <div className="mb-4 flex">
                    <label className="font-semibold text-gray-700 text-sm mb-2" htmlFor="identifiant">
                        Identifiant:
                            </label>
                            <div className='text-[#D04946] '>*
                            </div>
                    <input
                        className="mx-10 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="identifiant"
                        type="text"
                        placeholder="Identifiant"
                        value={identifiant}
                        onChange={(event) => setIdentifiant(event.target.value)}
                    />
                        </div>

                        <div className="mb-4 flex">
                    <label className="font-semibold text-gray-700 text-sm mb-2" htmlFor="identifiant">
                        Mot de passe:
                            </label>
                            <div className='text-[#D04946] '>*
                            </div>
                    <input
                        className="mx-5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                     <div className="">
                    <button
                        className="w-40 bg-black my-2 mb-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-3"
                        type="submit"
                    >
                        CONNEXION
                            </button>
                            <button
                        className="w-40 bg-black my-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                            >
                                <div>
                                    GOOGLE
                                </div>
                        
                    </button>
                </div>
                    </div>
                    
        
                </div>
                
                
                    </form>
    </div>

  )
}

export default FormAvocat