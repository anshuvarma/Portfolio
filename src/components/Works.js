import React from 'react';
import { worksdata } from "../data/worksdata.js";

const Work = () => {

  // works file
  const work = worksdata;
  //setwork(data);

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#343532]'>
      <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'>
        <div className=''>
          <p className='text-4xl font-bold text-gray-300 px-8 pt-16'>
            Works
          </p>
        </div>

        {/* container for works */}
        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 px-8 pt-7 sm: pb-16">

          {/* Gird Item */}
          {work.map((item, index) => (
            <>
              <div key={index} style={{ backgroundImage: `url(${item.image})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">

                {/* Hover effect for images */}
                <div className="pt-24 text-center">
                  <div className="pb-24 opacity-0 group-hover:opacity-100 ">
                  <div className="container text-white py-20"></div>

                    <a href={item.googleslides}>
                      <button
                        className="text-center rounded-3xl px-2 py-3  
                      bg-black text-white font-bold text-lg"
                      >
                        <span className='pt-4'>{item.name}</span>
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
