import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {Grprojects} from 'react-icons/gr'

const Nav = () => {
    const [nav, setNAv] = useState(false)
    const handleNav = () => {
        setNAv(!nav);
    };
    return(
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md"hidden'/>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/99 flex-col justify-center items-center z-20'> 
                        <a onClick ={handleNav}
                        href='#main' 
                        className='1-[75] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick ={handleNav}
                        href='#projects'
                        className='1-[75] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <Grprojects size={20} />
                            <span className='pl-4'>Education</span>
                        </a>
                        <a onClick ={handleNav}
                        href='#main' 
                        className='1-[75] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a onClick ={handleNav}
                        href='#main' 
                        className='1-[75] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ) : (
                 ''
                )}

                <div className='md:block hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col'>
                        <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gary-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineHome size={20}/>
                        </a>
                        <a href="#Projects" className='rounded-full shadow-lg bg-gray-100 shadow-gary-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Grprojects size={20}/>
                        </a>
                        <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gary-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsPerson size={20}/>
                        </a>
                        <a href="#Contacts" className='rounded-full shadow-lg bg-gray-100 shadow-gary-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={20}/>
                        </a>
                    </div>
                </div>
        </div>
    );
};

export default Nav