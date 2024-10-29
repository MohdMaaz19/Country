import React from 'react'
import { MdOutlineDarkMode } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className='w-[100%] px-4 py-6 shadow-md mb-2'>
          <div className='flex w-[65%] mx-auto' >
            <h1 className='text-black text-xl mr-auto font-bold '>Where in the world?</h1>
            <div className='flex gap-2' >
              <MdOutlineDarkMode className='mt-1 text-base'/>
              <p>Dark Mode</p>
            </div>
          </div>
    </nav>

    

  )
}

export default Navbar