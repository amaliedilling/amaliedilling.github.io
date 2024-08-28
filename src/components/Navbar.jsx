import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
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
      <div className='hidden lg:flex fixed flex-col top-[35%] -left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-[#334EAC]'
              href="/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-[#334EAC]'
              href="/">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-[#334EAC]'
              href="/">
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-[#334EAC]'
              href="/">
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar