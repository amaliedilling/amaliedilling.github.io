import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#F7F2EB]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-4xl sm:text-7xl font-bold text-[#081F5C]'>Hello,</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#081F5C]'>I'm Amalie</h1>
                <h2 className='text-2xl sm:text-4xl text-[#7096D1]'>Something something</h2>
                <p className='text-[#081F5C] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, te sea solet placerat.
                    In velit primis malorum qui, usu partem melius ea.
                    Cu decore voluptaria sit, in quaeque diceret facilis est,
                    sit everti percipit incorrupte eu. Dico posse maiestatis sit at,
                    eam decore tritani epicurei cu, pro rebum nostro officiis ei.
                    Equidem rationibus deseruisse eos an, vix similique argumentum cu,
                    duo simul dignissim necessitatibus at.</p>
                <div>
                    <button className='text-[#334EAC] group border-2 border-[#334EAC] px-6 py-3 my-2 flex items-center hover:bg-[#334EAC] hover:border-[#334EAC] hover:text-[#F7F2EB]'>
                        View work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home
