import React from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/javascript.png"
import REACT from "../assets/react.png"
import NODE from "../assets/node.png"
import GIT from "../assets/github.png"
const Skills = () => {
  return (
    <div className='w-full h-screen bg-[#0c1c0e] text-gray-300 ' name='skills'>
        <div className="max-w-[1000px] w-full h-full flex flex-col justify-center mx-auto p-4">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-yellow-300">Skills</p>
                <p className="py-4">// These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8">
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt='html icon'/>
                    <p className="my-4">HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt='html icon'/>
                    <p className="my-4">CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JS} alt='html icon'/>
                    <p className="my-4">JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={REACT} alt='html icon'/>
                    <p className="my-4">REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={NODE} alt='html icon'/>
                    <p className="my-4">NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={GIT} alt='html icon'/>
                    <p className="my-4">GITHUB</p>
                </div>
            </div>
        </div>
        <iframe width="0" height="315" src="https://www.youtube.com/embed/5Dj66BaklmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="0" height="315" src="https://www.youtube.com/embed/5Dj66BaklmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="0" height="315" src="https://www.youtube.com/embed/5Dj66BaklmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
  )
}

export default Skills