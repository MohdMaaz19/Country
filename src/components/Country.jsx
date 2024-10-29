import React from 'react'
import { useNavigate } from "react-router-dom"

const Country = ({country , isDark}) => {
    const {flags, name, population, region, capital, cca3} =country;

    const navigate = useNavigate()
    const countryDetails = () => {
      navigate(`country/${name.common}`)
    }

  return (
    <div key={cca3} className={`country border shadow-md rounded-md overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out transform ${isDark ? 'bg-[#2b3945]' : "" } ${isDark ? 'text-white' : "" }`} onClick={countryDetails}>

        <img src={flags.png} alt={`${name.common} flag`} className="min-w-full h-40 object-fill mb-4 " />
        <div className='p-4'>
        <h2 className="text-xl font-semibold mb-2">{name.common}</h2>
        <p><strong>Population:</strong> {population.toLocaleString()}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital ? capital[0] : 'N/A'}</p>
        </div>

    </div>
  )
}

export default Country;