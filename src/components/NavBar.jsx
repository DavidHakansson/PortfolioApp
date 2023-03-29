import React from 'react'
import { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/DH_logo_green.png' 

//add button in navbar for "projects" and "contact  me" and "about me"  and "home"  and "resume"

function NavBar(){
    const[nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return(
        <div className ='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-400'>
            <div>
                    <img src={Logo} alt="logo" style={{height: '70px'}}></img>
            </div>
            <ul className='hidden md:flex'>
                <li className='navli'><a href='#'>Home</a></li>
                <li className='navli'><a href='#'>About Me</a></li>
                <li className='navli'><a href='#'>Projects</a></li>
                <li className='navli'><a href='#'>Resume</a></li>
                <li className='navli'><a href='#'>Contact Me</a></li>
            </ul>

            {/* Hamberger menu */}
            <div onClick={handleClick} className='md:hidden z-20'>            
               {!nav ? <FaBars className='text-2xl'/> : <FaTimes className='text-2xl'/>} 
            </div>
            {/*Mobile menu */}
                <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-3xl'><a href='#'>About Me</a></li>
                    <li className='py-6 text-3xl'><a href='#'>Projects</a></li>
                    <li className='py-6 text-3xl'><a href='#'>Resume</a></li>
                    <li className='py-6 text-3xl'><a href='#'>Contact Me</a></li>
                    <li className='py-6 text-3xl'><a href='#'>Home</a></li>
                </ul>   
            {/*Social media icons */}
            <div className='flex fixed flex-col top-[35%] left-10'>
                <ul>
                    <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-500 bg-blue-500'>
                        <a className='flex justify-between items-center w-full' href='https://www.linkedin.com/in/david-h%C3%A5kansson-6aaa2516a/'>
                            LinkedIn<FaLinkedin size={30}/>

                        </a>
                    </li>
                    <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-500 bg-orange-500'>
                        <a className='flex justify-between items-center w-full'  href='https://github.com/DavidHakansson'>
                        Github<FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-500 bg-gray-50'>
                        <a className='flex justify-between items-center w-full'  href='mailto:davidhak@live.se'>
                            Mail <HiOutlineMail size={30}/>
                        </a>
                    </li>
        
                </ul>
            </div>

        </div>
    );
}
export default NavBar;  // export the component