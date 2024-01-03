import React from 'react'
import yahya from '../images/yahyadalbah-removebg.jpg'
import CV from '../images/CV-yahya.pdf'
import About from './About'
import Contact from './Contact'

export default function Home() {
  return (
    <div id="home" className="flex flex-col">
      <div className="px-8 py-2 md:px-16 flex flex-col gap-y-8 lg:flex-row justify-between mb-0 pb-0">
        <div className=" mt-32 lg:mt-8 self-center">
          <h1 className=" flex-auto font-bold text-2xl xsm:text-4xl sm:text-5xl mb-10 md:text-6xl font-mono">
            Hi<span className="text-gray-400">,</span>
            <br />I am <span className="text-PURPLE">Yahya Dalbah</span>.
          </h1>
          <p className=" text-gray-500 text-sm mb-10 md:text-md xl:text-lg lg:mb-14">
            Frontend developer. Specialize in React web development & making
            responsive websites.
          </p>
          <a
            href={CV}
            download
            target="_blank"
            className="border border-black p-3 shadow-inner md:text-lg"
          >
            Download CV
          </a>
        </div>
        <img
          src={yahya}
          className=" w-40r lg:w-30r xl:w-40r 2xl:w-50r h-40r mb-0"
          alt="yahya"
        />
      </div>
      <About />
    </div>
  );
}
