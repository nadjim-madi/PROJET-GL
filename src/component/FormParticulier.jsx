import React,{useState} from 'react'

function FormParticulier() {
  const [civilite, setCivilite] = useState('');
    const [nomdefamille, setNomdefamille] = useState('');
    const [prenom, setPrenom] = useState('');
    const [anniv, setAnniv] = useState('');
    const [adresse, setAdresse] = useState('');
    const [codepostal, setCodepostal] = useState('');
    const [ville, setVille] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform actions with the submitted data
        console.log('Submitted: ', { civilite, nomdefamille,prenom, anniv, adresse, codepostal, ville, email, password });
        // You can send the data to an API or perform other operations
    }
    return (
          <div>
                <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto">
      <div className='flex justify-center w-full relative top-16 border-2'>
                  <div className='w-full  items-center justify-center ml-16' >
                          <div className='font-bold text-xl my-10 mb-12'>Créez votre compte</div>
                          
                        <div className="mb-4 flex">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-gray-700 text-sm mb-2" htmlFor="Civilite">
                        Civilité:
                            </label>
                           
                    <input
                        className="mx-24 shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Civilite"
                        type="text"
                        placeholder="M/Mme/Société"
                        value={civilite}
                        onChange={(event) => setCivilite(event.target.value)}
                    />
                        </div>

                        <div className="mb-4 flex">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-gray-700 text-sm mb-2" htmlFor="nomdefamille">
                        Nom de famille:
                            </label>
                            
                    <input
                        className="mx-10 shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nomdefamille"
                        type="text"
                        placeholder="Nom de famille"
                        value={nomdefamille}
                        onChange={(event) => setNomdefamille(event.target.value)}
                    />
                        </div>

                        <div className="mb-4 flex">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-gray-700 text-sm mb-2" htmlFor="prenom">
                        Prénom:
                            </label>
                            
                    <input
                        className="mx-[90px] shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="prenom"
                        type="text"
                        placeholder="Prénom"
                        value={prenom}
                        onChange={(event) => setPrenom(event.target.value)}
                    />
                        </div>

                        <div className="mb-4 flex">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-gray-700 text-sm mb-2" htmlFor="anniv">
                        Né(e) le:
                            </label>
                            
                    <input
                        className="mx-[90px] shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="anniv"
                        type="text"
                        placeholder="Votre date de naissance"
                        value={anniv}
                        onChange={(event) => setAnniv(event.target.value)}
                    />
                        </div>

                        <div className="mb-4 flex">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-gray-700 text-sm mb-2" htmlFor="adresse">
                        Adresse:
                            </label>
                            
                    <input
                        className="mx-[90px] shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="adresse"
                        type="text"
                        placeholder="Adresse"
                        value={adresse}
                        onChange={(event) => setAdresse(event.target.value)}
                    />
                        </div>

                        <div className="mb-4 flex">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-gray-700 text-sm mb-2" htmlFor="codepostal">
                        Code postal:
                            </label>
                            
                    <input
                        className="mx-16 shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="codepostal"
                        type="number"
                        placeholder="code postal de votre ville"
                        value={codepostal}
                        onChange={(event) => setCodepostal(event.target.value)}
                            />
                            
                            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-gray-700 text-sm mb-2" htmlFor="codepostal">
                        Ville:
                            </label>
                            
                    <input
                        className="mx-16 shadow appearance-none border rounded w-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ville"
                        type="text"
                        placeholder="votre ville"
                        value={ville}
                        onChange={(event) => setVille(event.target.value)}
                    />

                        </div>

                        <div className="mb-4 flex">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-gray-700 text-sm mb-2" htmlFor="email">
                        Email:
                            </label>
                            
                    <input
                        className="ml-[105px] shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline peer invalid:border-pink-500 invalid:text-pink-600"
                        id="email"
                        type="email"
                        placeholder="Email qui servira comme un identifiant"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="mb-4 flex">
                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-gray-700 text-sm mb-2" htmlFor="password">
                        Password:
                            </label>
                            
                    <input
                        className="mx-20 shadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Doit contenir au moins une majuscule, une minuscule, un chiffre"
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

export default FormParticulier