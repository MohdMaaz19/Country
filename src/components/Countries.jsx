import React, { useEffect, useState } from 'react'
import Country from './Country';
import Search from './Search';

const Countries = ({isDark}) => {
const [countries, setCountries] = useState([]);
const [searchQuery, setSearchQuery] = useState('');
const [regionValue , setRegionValue] = useState('');
const [subRegionValue ,setSubRegionValue] = useState('');
const [sortOption, setSortOption] = useState('');

useEffect(()=>{
    const apiUrl = 'https://restcountries.com/v3.1/all';
    fetch(apiUrl)
    .then(res=>res.json())
    .then(data=>setCountries(data))
    .catch((error)=>console.log(error));
},[])

const filteredCountries = countries.filter((country)=>{
    const isInSearch = searchQuery === '' || country.name.common.toLowerCase()===(searchQuery.toLowerCase());
    const isInRegion = regionValue === '' || (country.region && country.region.toLowerCase() === regionValue.toLowerCase());
    const isInSubRegion = subRegionValue === '' || (country.subregion && country.subregion.toLowerCase() === subRegionValue.toLowerCase());
    return isInSearch && isInRegion && isInSubRegion;
})
.sort((a,b)=>{
    if(sortOption === 'areaAsc') return a.area - b.area;
    if(sortOption === 'areaDesc') return b.area-a.area;
    if(sortOption === 'populationAsc') return a.population - b.population;
    if(sortOption === 'populationDesc') return b.population - a.population;
    return 0;
})


return (
    <div className={`w-[100%] ${isDark ? 'bg-[#121212]' : "" } ${isDark ? 'text-white' : "" } `}>
        <Search setSearchQuery={setSearchQuery} setRegionValue={setRegionValue} setSubRegionValue={setSubRegionValue} countries = {countries} setSortOption = {setSortOption} isDark={isDark} />
        <div className='mx-auto grid grid-cols-1 gap-12 mt-[50px] md:grid-cols-2 lg:grid-cols-4 w-[65%]'>
            {
               filteredCountries.map((country)=>
                <Country key={country.cca3} country={country} isDark={isDark} />
               )
            }
        </div>
    </div>   
  )
}

export default Countries
