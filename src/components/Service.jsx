import React from 'react'

export default function Service({title, color, image}) {
  return (
    <div className={`flex flex-col bg-${color} items-center px-10 py-3 gap-4 max-w-xs rounded-sm`}>
      <img src={image} alt="" className='w-14' />
      <h1 className='font-bold text-center'>{title}</h1>
      <p className=' text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit voluptates dolorum veritatis rem facilis minima amet repellat sequi neque.</p>
    </div>
  )
}
