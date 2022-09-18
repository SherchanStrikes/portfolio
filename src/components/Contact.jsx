import React,{useState} from 'react'
import { BsArrowDownShort } from "react-icons/bs";
import { Link } from "react-scroll";

const Contact = () => {
  const [arrow,setArrow] = useState(false);
  const arrowClick = () => {
    setArrow(!arrow);
  }
  return (
    <div name="contact" className="bg-[#0c1c0e] w-full h-screen flex justify-center items-center p-4 ">
        <form method='POST' action='https://getform.io/f/50f92bd4-2033-448f-8534-c1e833bc163e' className='flex flex-col max-w-[600px]'>
            <div className='pb-8'>
                <p className='text-gray-300 font-bold text-4xl inline border-b-4 border-yellow-300 '>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='bg-[#d0f9d5] p-2 ' type='name' name='name' placeholder='Name'/>
            <input className='bg-[#d0f9d5] p-2 my-4' type='email' name='email' placeholder='Email'/>
            <textarea className='bg-[#d0f9d5] p-2' rows='10' name='message' placeholder='Message'/>
            <button className='text-white border-2 my-8 mx-auto py-3 px-4 hover:bg-yellow-500 hover:border-yellow-500 flex items-center'>Let's Collaborate!</button>
        </form>
        <span>
        <Link onClick={arrowClick} to={`${arrow ? "home" : "contact" }`} smooth={true} duration={900}>
              <BsArrowDownShort className={`bottom-10 right-10 fixed  rounded-full w-10 h-10 bg-green-500 hover:cursor-pointer
                ${arrow ? 'rotate-180' : ''}
              `} />
              </Link>
            </span>
    </div>
  )
}

export default Contact