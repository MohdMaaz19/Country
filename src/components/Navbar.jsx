import React from 'react'
import { MdOutlineDarkMode } from 'react-icons/md'

const Navbar = ({isDark, setIsDark}) => {
  return (
    <nav className={`w-[100%] px-4 py-6 shadow-md mb-2 ${isDark ? 'bg-[#2b3945]' : "" } ${isDark ? 'text-white' : "" } `}>
          <div className={'flex w-[65%] mx-auto'} >
            <h1 className={`text-black text-xl mr-auto font-bold ${isDark ? 'text-white' : "" }`}>Where in the world?</h1>
            <div className='flex gap-2' onClick={() => setIsDark(prev => !prev)} >
              <MdOutlineDarkMode className='mt-1 text-base'/>
              <p>{isDark ? "Light Mode" : "Dark Mode"}</p>
            </div>
          </div>
    </nav>

    

  )
}

export default Navbar