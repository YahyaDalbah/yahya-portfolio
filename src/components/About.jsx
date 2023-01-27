import React from 'react'
import Service from './Service'
import connectivity from '../images/connectivity.png'
import pc from '../images/pc.png'
import website from '../images/website.png'

export default function About() {
  return (
    <div className='flex flex-col items-center bg-BLACK px-10 gap-y-12 py-10 mt-0 flex-1'>
      <h1 className='text-2xl text-white font-bold'>About Me</h1>
      <p className='text-gray-200 font-light max-w-5xl text-center'>I am a hardworking and Passionate frontend developer who has acquired extensive knowledge in the field through many corses online and doing many projects,I like turning beautiful designs into useable & responsive websites,I primarily focus on writing clean, elegant and efficent code. I am proficient in HTML, CSS, Tailwind CSS, JavaScript, ReactJS and Redux Toolkit. I can also review an existing code and can consult with you on how to improve it </p>
      <h1 className='text-white font-bold text-3xl mt-10 '>Services I offer</h1>
      <div className='flex flex-col gap-14 items-center lg:flex-row'>
        <Service title="Responsive website" color="yellow-200" image={pc} />
        <Service title="User-friendly website" color="green-400" image={website} />
        <Service title="Connect to server/API" color="purple-400" image={connectivity} />
        {/* bg-yellow-200
        bg-green-400
        bg-purple-400 */}
      </div>
    </div>
  )
}
