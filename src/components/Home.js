import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#403e3d]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full'>
                <p className='text-white text-3xl'>Hey There 👋🏻 </p>
                <h1 className='text-3xl sm:text-4xl pt-2 pb-3 font-bold text-slate-100'>I am, Anshu Varma</h1>

                <h2 className='text-2xl sm:text-3xl text-slate-200'>I'm an Aspiring Web Developer</h2>
                
                <div className="container">
                <p className='text-2xl sm:text-[25px]  text-slate-300 py-4 max-w-[800px]'> Straight-Forward, Well-organized, and Positive Personality</p>
                </div>

                <div className='pt-3'> 
                    <Link to="/projects">
                    <button className='text-white group border-2 px-7 py-4 my-2 flex items-center hover:border-slate-500 text-lg'>View Projects
                            <HiArrowNarrowRight className='ml-3 ' />
                    </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
