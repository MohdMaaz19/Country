import { useNavigate } from "react-router-dom"
import getCountryData from "../Utils/getCountryData"

export default function GetBorders({ borders, isDark }) {
//   const { countryData } = useAppContext()
  const navigate = useNavigate()
const countryData = getCountryData();
  const handleRedirect = (e) => {
    navigate(`/country/${e.target.innerText}`)
  }

  if (!borders)
    return (
      <>
        <span className="mr-1 text-base font-bold">Bordering Countries:</span>
        <p>No bordering countries available.</p>
      </>
    )

  const bordersFullName = borders
    .map((border) => {
      const country = countryData.find((country) => country.cca3 === border)
      return country ? country.name.common : null
    })
    .filter(Boolean)

  return (
    <div className="mt-8">
      <span
        className="mr-1 text-base font-bold 
      "
      >
        Bordering Countries:
      </span>
      {bordersFullName.length > 0 ? (
        <ul className="flex flex-wrap gap-4">
          {bordersFullName.map((name, index) => (
            <li
              onClick={handleRedirect}
              className={`px-4 py-1 text-center rounded-md shadow-lg ${isDark ? 'bg-[#2b3945]' : "" } ${isDark ? 'text-white' : "" }`}
              key={index}
            >
              {name}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <span className="mr-1 text-base font-bold">Bordering Countries:</span>
          <p>No bordering countries available.</p>
        </>
      )}
    </div>
  )
}