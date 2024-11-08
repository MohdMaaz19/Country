import React from 'react'
import { useEffect, useState } from 'react'

const getCountryData = () => {

    const [countryData, setCountryData] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const resp = await fetch("https://restcountries.com/v3.1/all")
      const data = await resp.json()
      setCountryData(data)

    }
    fetchCountries()
  }, [])

return countryData;
}

export default getCountryData