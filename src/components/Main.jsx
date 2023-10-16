import React from "react";
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin}  from 'react-icons/fa'

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src = "C:\Users\Lawrence\Pictures\llao.jpg" alt="/"
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/70">
                <div className="max-w-[720px m-auto h-full flex flex-col justify-content lg:items-start items-center" >
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Lawrence Murage</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a  
                       <TypeAnimation
                        sequence={[
                            ' ' +' Professional Auditor',
                            3000,
                            ' ' + ' Professional Trader',
                            3000,
                            ' ' + ' Web Developer',
                            3000,
                        ]}
                        wrapper = 'div'
                        cursor={true}
                        repeat={Infinity}
                        style={{fontsize: 'lem', paddinLeft: '5px'}}
                        />
                    </h2>
                    <div  className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebook className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedin className='cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main