import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Countries from '../components/Countries'

const HomePage = ({isDark}) => {
  return (
    <>
        <Countries isDark={isDark} />
    </>
  )
}

export default HomePage