import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#F7F2EB] text-[#081F5C]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#081F5C] '>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm: text-right text-4xl font-bold '>
                        <p>Hi. This is the about section, so it should say something about me. lol.</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, te sea solet placerat.
                            In velit primis malorum qui, usu partem melius ea.
                            Cu decore voluptaria sit, in quaeque diceret facilis est,
                            sit everti percipit incorrupte eu. Dico posse maiestatis sit at,
                            eam decore tritani epicurei cu, pro rebum nostro officiis ei.
                            Equidem rationibus deseruisse eos an, vix similique argumentum cu,
                            duo simul dignissim necessitatibus at.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About