import React from 'react'

import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import JS from '../assets/javascript.png'
import Node from '../assets/node.png'
import ReactIcon from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name='skills'className='w-full h-screen bg-[#F7F2EB] text-[#081F5C]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-[#081F5C]'>Experience</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className=' shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className=' shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className=' shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt='JS icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className=' shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='Node icon' />
                    <p className='my-4'>Node.JS</p>
                </div>
                <div className=' shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactIcon} alt='react icon' />
                    <p className='my-4'>React</p>
                </div>
                <div className=' shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt='MongoDB icon' />
                    <p className='my-4'>MongoDB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills