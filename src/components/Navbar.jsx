import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/3.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F7F2EB] text-[#334EAC]'>
      <div>
        <img src={Logo} alt='logo' style={{ height: '80px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>About me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
 
      {/* mobile */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#F7F2EB] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>About me</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* social */}
      <div className='hidden'>

      </div>

    </div>
  )
}

export default Navbar