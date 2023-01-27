import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import phone from '../images/phone.png'
import email from '../images/email.png'
import { useState } from 'react';

export default function Contact() {
  const form = useRef();
  const name = useRef();
  const desc = useRef();

  const [error, setError] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    if(name.current.value && desc.current.value){
      emailjs.sendForm('service_3rv39l5', 'template_srzwbk9', form.current, 'CfHqO96zK1oHVvbFg')
      .then((result) => {
          console.log(result.text);
          console.log("massege sent")
          Swal.fire(
            'Thank you for the message!',
            'I hope u liked my portfolio! :)',
            'success'
          )
      }, (error) => {
          console.log(error.text);
      });
      setError(false)
      name.current.value = ''
      desc.current.value = ''
    }
    else{
      setError(true)
    }
    
    }
    console.log(name.current)
  return (
    <div className='flex-1 flex flex-col items-center'>
      <h1 className='font-semibold text-2xl mt-8'>Contact me: </h1>
      <div className=' w-full flex flex-col sm:flex-row justify-evenly p-10'>

        <div className=''>
          <div className='photo'>
            <img className='' src={phone} alt="" />
          </div>
          <h1>Phone: +972 598 265 323</h1>
        </div>
        <div className=''>
          <div className='photo mt-6 sm:mt-0'>
            <img className='' src={email} alt="" />
          </div>
          <h1>Email: <a className='link' href='mailto:yahya1dalbah@gmail.com'>yahya1dalbah@gmail.com</a></h1>
        </div>
      </div>
      <form className='flex flex-col w-80 sm:w-30r gap-6 px-5 py-10 contact-shadow' ref={form} onSubmit={sendEmail}>
        <h1 className='text-xl font-semibold relative'>Write me a message</h1>
        {(error && !name.current.value) ? <p className='-my-1 text-red-500 font-semibold text-center'>Error: enter your name</p> : ''}
        <input className='inputText' id='name' type="text" name="user_name" placeholder='Your name*' ref={name} onChange = {() => setError(false)} />
        <input className='inputText' id='email' type="email" name="user_email" placeholder='Your email' />
        {(error && desc.current.value == '') ? <p className='-my-1 text-red-500 font-semibold text-center'>Error: enter a message</p> : ''}
        <textarea className='inputText' id='message' name="message" placeholder='Your message*' ref={desc} onChange = {() => setError(false)} />
        <input className='bg-blue-400 py-1 text-white text-lg cursor-pointer active:translate-y-1 active:shadow-none button' type="submit" value="Send" />
      </form>
      <h1 className='text-semibold text-3xl mt-20'>Social Media: </h1>
      <div className='w-full flex justify-evenly my-7'>
        <a href='https://www.facebook.com/yahya.dalbah/' target={"_blank"} className='link'>facebook</a>
        <a href='https://github.com/YahyaDalbah' target={"_blank"} className='link'>github</a>
        <a href="https://www.linkedin.com/in/yahya-dalbah-68728324b/" target={"_blank"} className='link'>Linkedin</a>
      </div>
    </div>
  )
}

