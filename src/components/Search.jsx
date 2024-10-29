import React, { useEffect, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

const Search = ({ setSearchQuery, setRegionValue, setSubRegionValue, countries, setSortOption, isDark }) => {

    const [region, setRegion] = useState('');
    const [listSubRegion, setListSubRegion] =useState([])

    let subRegionSet = new Set();

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleRegionChange = (e) => {
        const selectedRegion = e.target.value;
        setRegionValue(selectedRegion);
        setRegion(selectedRegion); 
        setSubRegionValue('');
    };

    const handleSubRegionChange = (e) => {
        setSubRegionValue(e.target.value);
    };

    useEffect(() => {

        countries.forEach(country => {
            if (country.region.toLowerCase() === region) {
                subRegionSet.add(country.subregion)
            }
        });
        setListSubRegion([...subRegionSet])
    }, [region]); 


    return (
        <div className={`w-full mt-7 ${isDark ? 'bg-[#121212]' : "" } ${isDark ? 'text-white' : "" }` }>
            <div className='w-[65%] mx-auto flex flex-wrap justify-between items-center gap-4'>

                <div className={`flex shadow-lg h-[50px] rounded-lg ${isDark ? 'bg-[#2b3945]' : "" } ${isDark ? 'text-white' : "" }`}>
                        <IoSearchSharp className='ml-2 mt-4 mr-3 opacity-50' />
                        <input
                            type="text"
                            placeholder='Search for a country'
                            className={`max-w-[80%] outline-none ${isDark ? 'bg-[#2b3945]' : "" } ${isDark ? 'text-white' : "" }`}
                            onChange={handleInputChange}
                        />
                </div>

                <div className={`block appearance-none shadow-lg rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${isDark ? 'bg-[#2b3945]' : "" } ${isDark ? 'text-white' : "" }`}>
                    <select
                        name="sort"
                        id="sort"
                        className=" h-[35px] rounded-lg outline-none bg-transparent"
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="" className='opacity-50'>Sort By</option>
                        <option value="areaAsc">Area: Ascending</option>
                        <option value="areaDesc">Area: Descending</option>
                        <option value="populationAsc">Population: Ascending</option>
                        <option value="populationDesc">Population: Descending</option>
                    </select>
                </div>
                
                    <div className={`block appearance-none shadow-lg rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${isDark ? 'bg-[#2b3945]' : "" } ${isDark ? 'text-white' : "" }`}>
                        <select name="subregion" id="subregion" onChange={handleSubRegionChange} className=" h-[35px] rounded-lg bg-transparent outline-none"
                        >
                            <option value="select">Select a subregion</option>
                                {listSubRegion.map((subregion) => <option key={subregion} value={subregion}>
                                {subregion}
                            </option>  )}
                        </select>
                    </div>
             

                    <div className={`block appearance-none shadow-lg rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${isDark ? 'bg-[#2b3945]' : "" } ${isDark ? 'text-white' : "" }`}>
                        <select
                            name="region"
                            id="region"
                            className=" h-[35px] rounded-lg outline-none bg-transparent"
                            onChange={handleRegionChange}
                            value={region}
                        >
                            <option value="">Filter by Region</option>
                            <option value="africa">Africa</option>
                            <option value="americas">Americas</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>

            </div>
        </div>
    );
};

export default Search;
