import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Navbar = (props) => {

    return (
        <div className='fixed w-full h-[70px] flex items-center px-32 bg-[#272424] text-white shadow-2xl'>
            <ul className='container flex justify-evenly'>
                <li className='py-4 lg:text-[25px] sm: text-[22px] '>
                    <Link to="/">Home</Link>
                </li>
                <li className='py-4 lg:text-[25px] sm: text-[22px]'>
                <Link to="/skills">Skills</Link>
                </li>
                <li className='py-4 lg:text-[25px] sm: text-[22px]'>
                <Link to="/projects">Projects</Link>
                </li>
                <li className='py-4 text-[24px]'>
                <Link to="/works">Works</Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className="fixed flex-col top-[30%] left-0">
                <ul>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#0078b1]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/anshu-varma-32b99b1ba/">
                            LinkedIn <FaLinkedin size={20} />
                        </a>
                    </li>

                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#b95a5a]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/anshu.n.varma?r=nametag">
                            Instagram <FaInstagram size={20} />
                        </a>
                    </li>

                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-black'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/anshuvarma">
                            Github <FaGithub size={20} />
                        </a>
                    </li>

                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#3f1fbc]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:anshu101100[at]gmail[dot]com">
                            Email <HiOutlineMail size={20} />
                        </a>
                    </li>

                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#020a13]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://docs.google.com/document/d/1bMymAHyM4KRphdXx8sl3PdvvfXe7j0as/edit?usp=sharing&ouid=106733988499391269666&rtpof=true&sd=true">
                            Resume <BsFileEarmarkTextFill size={20} />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar