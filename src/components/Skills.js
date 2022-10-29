import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Python from '../assets/python.png';
import SQL from '../assets/sql.png';
import cpp from '../assets/cpp.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#343532] text-gray-300 '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pl-7 lg:pl-16'>
              <p className='text-4xl font-bold text-slate-200'>Skills</p>
          </div>

          <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-7 lg:pr-5'>
              <div>
                  <img className='w-20 mx-auto lg:pl-0 pr-0' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-slate-200'>HTML</p>
              </div>

              <div>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 text-slate-200'>CSS</p>
              </div>
              
              <div>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4 text-slate-200'>JavaScript</p>
              </div>

              <div>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4 text-slate-200'>ReactJS</p>
              </div>
              
              <div>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4 text-slate-200'>Python</p>
              </div>

              <div>
                  <img className='w-20 mx-auto' src={SQL} alt="HTML icon" />
                  <p className='my-4 text-slate-200'>SQL</p>
              </div>

              <div>
                  <img className='w-20 mx-auto' src={cpp} alt="HTML icon" />
                  <p className='my-4 text-slate-200'>C++</p>
              </div>

              <div>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4 text-slate-200'>TAILWIND</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
