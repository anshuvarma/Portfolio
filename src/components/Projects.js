import React from 'react';
import { projdata } from "../data/data.js";

const Work = () => {

  // projects file
  const project = projdata;
  //setProject(data);

  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#343532]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold text-gray-200 px-8 pt-16'>
            Projects
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 pt-6">

          {/* Gird Item */}
          {project.map((item, index) => (
            <>
              <div key={index} style={{ backgroundImage: `url(${item.image})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

                {/* Hover effect for images */}
                <div className="pt-24 text-center">
                  <div className="opacity-0 group-hover:opacity-100 ">
                  <div className="container text-white py-8"></div>
                    <a href={item.github}>
                      <button
                        className="text-center rounded-3xl px-4 py-2  
                      bg-[#010000] text-white text-lg"
                      >
                        <span>{item.name}</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Work;
