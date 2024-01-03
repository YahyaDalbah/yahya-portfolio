import React from 'react'

export default function Service({title, color, image,desc}) {
  return (
    <div className={`height-full flex flex-col bg-${color} items-center px-10 py-3 gap-4 max-w-xs rounded-sm`}>
      <img src={image} alt="" className='w-14' />
      <h1 className='font-bold text-center'>{title}</h1>
      <p className=' text-sm text-center'>{desc}</p>
    </div>
  )
}
